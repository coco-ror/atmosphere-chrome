import { Injectable } from '@angular/core';
import { Angular2TokenService } from './angular2-token.service';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';

import { SERVER_URL } from '../common';
import 'rxjs/Rx';
@Injectable()
export class ExploreService {
    constructor(private http: Http, private authService: Angular2TokenService) { }
    
    getFeed(page_no){
        let url = "/articles/explore";
        let urlSearchParams = new URLSearchParams();   
        let data: string = "";     
        urlSearchParams.append('filter', "");
        urlSearchParams.append('page', page_no)
        data = urlSearchParams.toString();        
        return this.authService.postFormData(url, data)
    }
}