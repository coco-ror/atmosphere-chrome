export class Notification {
  public notification_id: number;
  public action_url: string;
  public image_url: string;
  public message: string;
  public read: boolean;
  public isLoading: boolean;
  constructor(){
    this.notification_id = 0;
    this.action_url = '';
    this.image_url = '';
    this.message = '';
    this.read = false;
    this.isLoading = false;
  }
}
