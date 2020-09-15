import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExploreService } from '../../services';

declare var jQuery:any;

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})

export class ExploreComponent implements OnInit {
	public articles: any = [];
	public isLoadingUserArticles: boolean = false;

  public page: number = 0;
  public is_end: boolean = false;
  public slimScroll: any;

  constructor(private _explore_services: ExploreService, private router: Router) {
  	this.getArticles();
  }

  ngOnInit() {
  	this.slimScroll = jQuery("#article-scroll-box").slimScroll({
        height: '100%',
        width: '343px',
        wheelStep: 3
    });

    let object = this;
    this.slimScroll.bind('scroll', function(e){
      if(this.scrollTop + 1000 > this.scrollHeight) {
      	object.getArticles();
      }
    });
  }

  getArticles() {	
  	let me = this;

  	if(this.is_end == false && this.isLoadingUserArticles == false){
			me.isLoadingUserArticles = true;

	  	this._explore_services.getFeed(this.page)
	            .subscribe(
	                response => {
						let data = response.json();
	                	if(data.feed.length != 0) {
											if(this.page == 0)
												this.articles = { feed : [] };
		                	this.page++;
		                	//insert the articles
											data.feed.forEach(function(value, index) {
												if(value.article_type == 0)
													value.canonical_url = value.body_data.canonical_url;
												else
													value.canonical_url = value.rdo_url;
												me.articles.feed.push(value);
											});
		                }
		                else {
		                	this.is_end = true;
		                }
	                	me.isLoadingUserArticles = false;
	                },
	                error => {
										me.isLoadingUserArticles = false;
	                });
  	}
  }
}
