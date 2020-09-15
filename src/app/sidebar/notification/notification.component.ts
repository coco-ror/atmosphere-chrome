import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
	public network_notifications: any = [];
	public notifications: any = [];
  public notification_timer_id: any;
	public AppConstants: any = {
    network_contributors: {
    	contributor_responses: {accepted: 1, declined: 2}
  	}
  };

  constructor( private _notification_service: NotificationService ) {
  	
  }

  ngOnInit() {
  	this.getNotifications();
  	//load the notifications in 30 seconds
  	this.notification_timer_id = setInterval(() => {
      this.getNotifications();
    }, 30000);
  }

  ngOnDestroy() {
    clearInterval(this.notification_timer_id);
  }

  dismissAll() {
  	for(let i = 0; i < this.notifications.length; i++) {
      this.dismiss(this.notifications[i].notification_id);
  	}
  }

  dismiss(notification_id) {
  	this._notification_service.dismissNotification(notification_id)
            .subscribe(
                data => {
                	data = data.json();
                	if(data['success'] == true) {
                		this.getNotifications();
                	}
                },
                error => {
                  // this._alert_service.error(error);
                });
  }

  getNotifications() {
  	this._notification_service.getNotifications()
            .subscribe(
                data => {
                	data = data.json();
                	this.network_notifications = data['network_invites'];
                	this.notifications = data['notifications'];
                  this._notification_service.setNotificationCount(data['badge_count']);
                },
                error => {
                  // this._alert_service.error(error);
                });
  }

  accept(notification) {
  	this._notification_service.responseInvite(notification.network_contributor_id, this.AppConstants.network_contributors.contributor_responses.accepted)
            .subscribe(
                data => {
                	data = data.json();
                	if(data['success'] == true) {
                		this.getNotifications();
                	}
                },
                error => {
                  // this._alert_service.error(error);
                });
  }

  decline(notification) {
  	this._notification_service.responseInvite(notification.network_contributor_id, this.AppConstants.network_contributors.contributor_responses.declined)
            .subscribe(
                data => {
                	data = data.json();
                	if(data['success'] == true) {
                		this.getNotifications();
                	}
                },
                error => {
                  // this._alert_service.error(error);
                });
  }

  _decodeURIComponent(url) {
    if( url == null)
      return '#';
    else
      return decodeURIComponent(url);
  }

}
