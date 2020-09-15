import { Injectable } from '@angular/core';
import { Angular2TokenService } from './angular2-token.service';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';

import { SERVER_URL } from '../common';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
declare var chrome: any;

@Injectable()
export class InteractService {
    constructor(private http: Http, private authService: Angular2TokenService) { }
    
    scrapeURl(url: string) {
        let api_url = "/articles/scrape";

        let observ = this.authService.postFormData(api_url, 'url='+url);
        return observ;
    }

    getHeader() {
        let baseHeaders: { [key:string]: string; } = {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        };

        let baseRequestOptions = new RequestOptions({
            headers: new Headers(baseHeaders),
            withCredentials: true,
        });

        return baseRequestOptions;
    }

    loadPageData(){
        return Observable.create(observer => {
          chrome.runtime.sendMessage({type: "sendPageData"}, function(response) {
            observer.next(response);
            observer.complete();
          });
       });
    }

    getUserData() {
      return this.http.get(SERVER_URL + "/users/data", this.getHeader()).map((response: Response) => response.json());
    }

    syndicate(article) {
      let url = "/syndications";
      let data: string = "";

      let urlSearchParams = new URLSearchParams();

      for(var key in article) {
        urlSearchParams.append(key, article[key]);
      }

      data = urlSearchParams.toString();
            
      return this.authService.postFormData(url, urlSearchParams);
    }

    rate(article_url, rating) {
      let url = "/articles/rate";
      let data: string = "";

      let urlSearchParams = new URLSearchParams();

      urlSearchParams.append("url", article_url);
      urlSearchParams.append("rating", rating);

      data = urlSearchParams.toString();
            
      return this.authService.postFormData(url, urlSearchParams);
    }

    add_comment(syndication_id: number, parent_id: number, content: string, isPublic: boolean = true){
      let url = "/syndications/comment_add";

      let _isPublic = 0;
        if(isPublic)
          _isPublic = 0;
        else
          _isPublic = 1;
      
      let data: any = { syndication_id: syndication_id, parent_id: parent_id, comment_text: content, comment_type: _isPublic};
      return this.authService.post(url, data);
    }
}