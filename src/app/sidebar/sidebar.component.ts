import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef, HostListener, Renderer } from '@angular/core';
import { InteractService, NotificationService, AtmosphereService } from '../services';

declare var chrome: any;
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService, USER_SIGNED_INFO } from '../services/angular2-token.service';

//get the article component
import { ExploreComponent } from './explore/explore.component';
 
import { Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public sidebar_open: boolean = true;

  //var for the selected tabs
  public is_notification_tab_open: boolean = false;
  public is_explore_tab_open: boolean = false;
  public is_interact_tab_open: boolean = true;

  public is_shown_comment_tab: any = false;

  public url: string;
  public refreshDATA: any;
  public requestComplete : boolean = false;
  public articleData: any = [];

  public content_type: number = 0;
  public dd_open: boolean = false;

  public tempTag: string = "";
  public tag_source: Observable<any>; 
  public tagLoadingFlag: boolean = false;
  public tagLoading: string = "";
  public user:any = [];

  public is_facebook_selected: boolean = false;
  public is_twitter_selected: boolean = false;
  public colapse_networks: boolean = true;
  public is_syndicating: boolean = false;

  public is_article_internal: boolean = false;
  public is_article_members_only: boolean = false;
  public is_article_public: boolean = true;

  public comment: string = "";
  public checked_network: any = [];

  public hide_atmosphere_wrapper:boolean = false;
  public syndication_comment_open: boolean = false;
  public current_syndication: any = [];
  public current_syndication_index: number = 0;
  public data_url: string = '';
  public parent_comment: string = '';

  //values required for enabling child commenting
  public child_1_repsond_box: any[] = [];
  public child_1_comment: string = '';
  public child_2_repsond_box: any[] = [];
  public child_2_comment: string = '';

  //prompt user about tag selection
  public tag_prompt:boolean = false;
  public tag_placeholder_text = "Share your thoughts";

  public _error: boolean = false;
  public _error_message: string = '';
  public pageData: any = [];
  /*
  * Set true for debug mode and it will scrape the fixed url
  * Required for testing
   */
  public debug: boolean = false; 

  constructor(
    private _interact_service: InteractService, 
    public _notification_service: NotificationService,
    public atmosphere: AtmosphereService, 
    public authService: Angular2TokenService,
    private _explore_component: ExploreComponent,
    private router: Router
  ) {
    if(this.debug) {
      this.requestComplete = false;
      this.getSyndicate('https://techcrunch.com');
      this.data_url = 'https://techcrunch.com';
    }

    this._interact_service.loadPageData().subscribe((res) =>{
      this.pageData = res;
    });

    //for the tag selector
    this.tag_source = Observable.create((observer:any) => {
      // Runs on every search
      this.tempTag = this.tempTag.toLowerCase();
      let temp = this.tempTag;
      if(temp == "")
      {
        observer.complete();
        this.tagLoadingFlag = false;
        return;
      }
      this.tagLoadingFlag = true;
      this.tagLoading = temp;
      this.atmosphere.loadtags(this.tempTag).subscribe(result=>{
        if(temp == this.tempTag)
        {
          let data = this.processLoadedTags(result);
          this.tagLoadingFlag = false;
          observer.next(data);
        }
        else if(this.tempTag == "")
          this.tagLoadingFlag = false;
        observer.complete();
      }, error => { this.tagLoadingFlag = false; observer.complete();});
    });
    
    //get user data using user id
    this._interact_service.getUserData().subscribe(
      result=>{
        this.user = result.user;
      },
      error => {

    });
    
    //Set initial data
    this.articleData['title'] = '';
    this.articleData['description'] = '';
    this.articleData['image_url'] = '';
    this.articleData['tags'] = [];
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    //set the url
    let me = this;

    chrome.tabs.getSelected(null, function(tab) {
        var result = me.getSyndicate(tab.url);
        me.data_url = tab.url;
    });

    if(!this.debug) {
      var refreshDATA = setInterval(() => {
        
        
      }, 10000);
    }
  }

  open_notification_tab() {
    this.is_notification_tab_open = true;
    this.is_explore_tab_open = false;
    this.is_interact_tab_open = false;
    if(this._notification_service.getNotificationCount() != 0 && this._notification_service.getNotificationCount() != undefined) {
      this._notification_service.markViewed().subscribe(
        data => {
          data = data.json();
          if(data['success'])
            this._notification_service.setNotificationCount(0);
        },
        error => {
        });
    }
  }

  open_interact_tab() {
    this.is_notification_tab_open = false;
    this.is_explore_tab_open = false;
    this.is_interact_tab_open = true;
  }

  open_explore_tab() {
    //set the page to 0 and initiate the new article fetch
    this._explore_component.page = 0;
    this._explore_component.getArticles();

    this.is_notification_tab_open = false;
    this.is_explore_tab_open = true;
    this.is_interact_tab_open = false;
  }

  getSyndicate(url) {
    if(!this.requestComplete) {
      this._error = false;
      this._error_message = '';
      clearInterval(this.refreshDATA);

      this._interact_service.scrapeURl(url).subscribe(
          data => {
              let result = data.json();
              if( result.success ) {
                this.articleData = data.json();
                //Check return value and set from page data
                if(this.articleData['title'] == "" || this.articleData['title'] == null)
                  this.articleData['title'] = this.pageData['title'];
                if(this.articleData['description'] == "" || this.articleData['description'] == null)
                  this.articleData['description'] = this.pageData['description'];
                if(this.articleData['image_url'] == "" || this.articleData['image_url'] == null)
                  this.articleData['image_url'] = this.pageData['image_url'];
                this.articleData['tags'] = [];
                if(result['success']) {
                  clearInterval(this.refreshDATA);
                }

                if(result.syndications != undefined && result.syndications != null && !result.no_data) {
                  //set the data for the comments
                  this.current_syndication = result.syndications[this.current_syndication_index];

                  //get all the replies
                  this.getAllReplies(this.current_syndication);
                }
              } else {
                this._error = true;
                this._error_message = result.error;
              }
              

              this.requestComplete = true;
          },
          error => {
            //redirect to login page when status is 401(undefined)
            if(error.status == 401) {
              this.router.navigate(['/login']);
            }
            clearInterval(this.refreshDATA);
            this.requestComplete = true;
          }
      );
    }
  }
  
  
  showComment() {
    this.tag_placeholder_text = "Add up to three tags.";
    this.is_shown_comment_tab = true;
    this.tag_prompt = true;
  }

  hideSideBar(){
    // this.appState.set('isAtmosphereShown', false);
    chrome.runtime.sendMessage({type: "exitExtension"});
  }

  toggleDD() {
    this.dd_open = !this.dd_open;
  }

  processLoadedTags(result){
    let data: any[] = result.json();
    //check if response data is duplicated with selected tags
    for(let j = 0; j < data.length; j++){
      for(let i = 0; i < this.articleData['tags'].length; i++)
      {
        if(data[j].label === this.articleData['tags'][i])
        {
          data.splice(j, 1);
          j--;
          break;
        }
      }
    }
    //check if current term is in response data and remove it.
    for(let j = 0; j < data.length; j++){
      if(data[j].label === this.tempTag)
      {
        data.splice(j, 1);
        break;
      }
    }
    //check if current item is in selected list and if it doesn't exist , it adds item to data
    let flag = true;
    for(let i = 0; i < this.articleData['tags'].length; i++){
      if(this.tempTag === this.articleData['tags'][i]){
        flag = false;
        break;
      }
    }
    if(flag)
      data.unshift({id: -1, label: this.tempTag});
    return data;
  }

  tagSelected(tag){
    if(this.tempTag == "")
      return;
    let term = tag.item.label;
    let terms = tag.item.label.split(',');
    for(let i = 0; i < terms.length; i ++){
      let term = terms[i].trim();
      if(term == "") continue;
      let exist_in_data_flag: boolean = false;
      for(let j = 0; j < this.articleData['tags'].length; j++){
        if(this.articleData['tags'][j] === term)
        {
          exist_in_data_flag = true;
          break;
        }
      }
      if(!exist_in_data_flag){
        if(this.articleData['tags'].length > 2)
        {
          if(i == 0){
            // this.warningMessage = MESSAGES.TAG_LIMIT_WARN;
            // this.warningDialog.show();
          }
          break;
        }
        else{
          this.articleData['tags'].push(term);
          // this.contentChanged = true;
          this.tempTag = "";
        }
      }
    }
  }

  removeTag(index){
    this.articleData['tags'].splice(index, 1);
    // this.contentChanged = true;
  }

  checkTagInputKeyDown(e){
    if (e.keyCode !== 13) {return;}
    if(this.tempTag == "" || (this.tempTag == this.tagLoading && !this.tagLoadingFlag))
      return;
    let exist_in_data_flag = false;
    let terms = this.tempTag.split(',');
    for(let i = 0; i < terms.length; i ++){
      let term = terms[i].trim();
      if(term == "") continue;
      for(let j = 0; j < this.articleData['tags'].length; j++){
        if(this.articleData['tags'][j] === term)
        {
          exist_in_data_flag = true;
          break;
        }
      }
      if(!exist_in_data_flag){
        if(this.articleData['tags'].length > 2)
        {
          if(i == 0){
            // this.warningMessage = MESSAGES.TAG_LIMIT_WARN;
            // this.warningDialog.show();
          }
          break;
        }
        else{
          this.articleData['tags'].push(term);
          // this.contentChanged = true;
          this.tempTag = "";
        }
      }
    }
  }

  rateChanged(rate){
    this.articleData.rating = rate;
  }  

  changeArticleType(value) {
    if(value == 1) {
      this.is_article_internal = true;
      this.is_article_public = false;
      this.is_article_members_only = false;
    }
    if(value == 2) {
      this.is_article_internal = false;
      this.is_article_public = false;
      this.is_article_members_only = true;
    }
    if(value == 3) {
      this.is_article_internal = false;
      this.is_article_public = true;
      this.is_article_members_only = false;
    }
  }

  onNetworkCheckBoxChange(event, value) {
    if(event.target.checked) {
      this.checked_network[value] = true;
    }
    else {
      this.checked_network[value] = false;
    }
  }

  syndicate() {
    this.is_syndicating = true;

    //prepare the syndication array
    if(this.articleData != undefined) {
      let article = [];

      //check if a tag is selected or not
      if(this.articleData['tags'].length <= 0) {
        alert("You must add at least one tag to syndicate.");
        this.is_syndicating = false;
        return;
      }

      if(this.comment == '') {
        alert("Please add a comment.");
        this.is_syndicating = false;
        return;
      }

      //prepare the tag_list
      this.articleData['tags'].forEach(function(value, index) {
        article['tag_list'] += value + ',';
      });

      article['tag_list'] = article['tag_list'].replace(/,+$/, "");

      //remove 9 from begining
      article['tag_list'] = article['tag_list'].slice(9);

      if(!this.articleData['no_data']) {
        article['url'] = this.articleData['url'];
        article['image_url'] = this.articleData['image_url'];
        article['title'] = this.articleData['title'];
        article['description'] = this.articleData['description'];
      }
      else {
        article['url'] = this.pageData['url'];
        article['image_url'] = this.pageData['image_url'];
        article['title'] = this.pageData['title'];
        article['description'] = this.pageData['description'];
      }

      article['body'] = "";

      article['comment'] = this.comment;
      article['rating'] = this.articleData['rating'];


      article['post_to_facebook'] = this.is_facebook_selected;
      article['post_to_twitter'] = this.is_twitter_selected;

      article['syndication_type'] = this.content_type;

      if(this.is_article_internal) {
        article['network_content_type'] = 12; 
      }

      if(this.is_article_members_only) {
        article['network_content_type'] = 11; 
      }

      if(this.is_article_public) {
        article['network_content_type'] = 10; 
      }

      var network_id = [];
      var i = 0;
      this.checked_network.forEach(function(value, index){
        if(value) { //will be true if checked
          network_id[i] = index;
          i++;
        }
      });

      article['networks'] = network_id;
      
      this._interact_service.syndicate(article).subscribe(
        result => {
          this.comment = '';
          this.tempTag = '';
          this.requestComplete = false;
          this.getSyndicate(this.data_url);
          this.is_syndicating = false;    
        }, error => { 
          this.is_syndicating = false;    
      });
    }
  }

  replyToSyndicate(syndication, index) {
    //for maintaining third level comments
    this.getAllReplies(syndication);

    this.current_syndication = syndication;
    this.current_syndication_index = index;
    
    this.hide_atmosphere_wrapper = true;
    this.syndication_comment_open = true;
  }

  openSyndicationCommentBox() {
    //reset the value
    this.child_1_repsond_box = [];

    this.syndication_comment_open = true;
  }

  syndicationBack() {
    this.hide_atmosphere_wrapper = false;
    this.syndication_comment_open = false;
  }

  viewSyndicateComment(syndication, index) {
    this.current_syndication = syndication;
    this.current_syndication_index = index;

    this.hide_atmosphere_wrapper = true;
  }

  nextComment() {
    if(this.articleData.syndications.length > (this.current_syndication_index)) {
      this.current_syndication = this.articleData.syndications[this.current_syndication_index++];
    }
    else {
      this.current_syndication_index = 0;
    }
  }

  previousComment() {
    if(this.current_syndication_index > 0) {
      this.current_syndication = this.articleData.syndications[this.current_syndication_index--];
    }
    else {
      this.current_syndication_index = this.articleData.syndications.length - 1;
    }
  }

  //for review section
  add_comment(syndication_id, parent_id, comment, isPublic) {
    this._interact_service.add_comment(syndication_id, parent_id, comment, isPublic).subscribe(
       data => {
         let result = data.json();
         this.requestComplete = false;
         this.getSyndicate(this.data_url);

         //reset the values
         this.parent_comment = "";
         this.child_1_repsond_box = [];
         this.child_1_comment = "";
         this.child_2_comment = "";

         //close comment reply box
         if(parent_id == this.current_syndication.syndication.comment_id)
           this.syndication_comment_open = false;
         else{
           this.child_1_repsond_box[parent_id] = false
           this.child_2_repsond_box[parent_id] = false
         }
       },
       error => {
         //

       }
    );
  }

  isFirstChildRespondBoxOpen(comment_id) {
    if(this.child_1_repsond_box[comment_id] != undefined && this.child_1_repsond_box[comment_id]) {
      return true;
    }
    else {
      return false;
    }
  }

  showFirstChildBox(comment_id) {
    //close the parent comment box
    this.syndication_comment_open = false;
    //reset the value
    this.child_1_repsond_box = [];
    this.child_1_comment = "";
    //open the child 1 comment box
    this.child_1_repsond_box[comment_id] = true;
  }

  replyChild2(comment_id) {
    this.child_2_repsond_box = [];
    this.child_2_repsond_box[comment_id] = true;
  }

  isSecondChildRespondBoxOpen(comment_id) {
    if(this.child_2_repsond_box[comment_id] != undefined && this.child_2_repsond_box[comment_id]) {
      return true;
    }
    else {
      return false;
    }
  }

  getAllReplies(syndication) {
    let me = this;
    //level 2 comments
    if(syndication.comments != undefined && syndication.comments.length > 0) {

      //loop through level 3 comments
      syndication.comments.forEach( function(value, index) {
        if(value.replies != null) {

          //loop through for 3 and above level of commenting
          value.replies.forEach(function(value_1, index_1) {
            if(value_1.replies != null) {

              //push the 3+ level comments in syndication object
              value_1.replies.forEach(function(value_2, index_2) {
                syndication['comments'][index]['replies'].push(value_1.replies[index_2]);

                /*
                * Now we will use a recursive function to dig further through the replies
                * Basically for n level comments
                 */
                if(value_2.replies != null) {
                  me.__replyDigger(syndication['comments'][index]['replies'], value_2);
                }

              });

            }
          });

        }
      });

    }
  }

  __replyDigger(_parent, _child) {
    let me = this;

    _child.replies.forEach(function(value, index) {
      _parent.push(value);

      if(value.replies != null) {
        me.__replyDigger(_parent, value);
      }

    });

  }
}