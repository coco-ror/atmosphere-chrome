import { Injectable } from '@angular/core';
import { Angular2TokenService } from './angular2-token.service';
import { GeneralService } from './general.service';
import { clone, SERVER_URL } from '../common';
import { Http, Response, Headers, Request, RequestMethod, RequestOptions } from '@angular/http';
//This server stores article details and provides interface for atmosphere sidebar.
@Injectable()
export class AtmosphereService {
  constructor(private _http: Http, private authService: Angular2TokenService, private general: GeneralService) { 
  }


  loadArticleById(id: number){
    let url = "/common/articles/details";
    let observ = this.authService.postFormData(url, "article_id=" + id);
    return observ;
  }
  loadArticleByUrl(_url: string){
    let url = "/articles/scrape";
    let observ = this.authService.postFormData(url, "url=" + _url);
    return observ;
  }
  loadtags(term){
    let url = "/articles/autocomplete_tag_name?term=" + term;
    let observ = this.authService.get(url);
    return observ;
  }

  //Casting vote (if type equals 0 vote down, type equals 1 cast vote up)
  cast_vote(comment_id: number, vote_type: number){
    let url = "/users/cast_vote";
    let data: any = { comment_id: comment_id, vote_type: vote_type};
    return this.authService.post(url, data);
  }
  rate(_url:string, rating: number){
    let url = "/articles/rate/";
    let observ = this.authService.post(url, { url: _url, rating: rating });
    return observ;
  }
  saveSyndication(comment_id: number, comment_text: string){
    let url = "/syndications/update_comment";
    // let data = { comment_id: comment_id, comment_text: comment_text };
    let body = 'comment_id=' + comment_id + '&comment_text=' + comment_text;
    let observ = this.authService.postFormData(url, body);
    return observ;
  }
  deleteSyndication(id: number){
    let url = "/syndications/delete";
    let data = "syndication_id=" + id;
    let observ = this.authService.postFormData(url, data);
    return observ;
  }
  deleteComment(id: number){
    let url = "/syndications/comment_delete";
    let data = "comment_id=" + id;
    let observ = this.authService.postFormData(url, data);
    return observ;
  }

  getNotifications(){
    let url = "/notifications";
    let observ = this.authService.postFormData(url, '');
    return observ;
  }

  dismissNotification(notification_id){
    let url = "/notifications/read/" + notification_id;
    let observ = this.authService.get(url);
    return observ;
  }

  responseInvite(network_contributor_id, response){
    let url = "/networks/contributor/response";
    let observ = this.authService.postFormData(url, "network_contributor_id=" + network_contributor_id + "&response=" +response);
    return observ;
  }
}
