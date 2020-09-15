import { Injectable } from '@angular/core';
import { Angular2TokenService } from './angular2-token.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { Notification } from '../models/index';
import 'rxjs/Rx';
@Injectable()
export class NotificationService {
    public notification_count: number = 0;
    constructor(private http: Http, private authService: Angular2TokenService) {}
 
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

    //mark all the notification viewed/read
    markViewed() {
        let url = "/notifications/viewed";
        let observ = this.authService.postFormData(url, '');
        return observ;
    }

    getNotificationCount(): number{
        return this.notification_count;
    }

    setNotificationCount(count: number){
        this.notification_count = count;
    }
}