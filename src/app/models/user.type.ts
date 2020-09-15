export class User {
  public id: number;
  public name: string;
  public email: string;
  public station_name: string;
  public tagline: string;
  public fb_link: string;
  public twitter_link: string;
  public station_name_set: boolean;
  public receive_digest: boolean;
  public image_url: string;
  public roles: string[];
  public website: string;
  public avatar: any;
  public password: string;
  public password_confirmation: string;
  public is_admin: boolean;
  public user_votes: number;
  constructor(){
    this.id = 0;
    this.name = "";
    this.email = "";
    this.station_name = "";
    this.tagline = "";
    this.fb_link = "";
    this.twitter_link = "";
    this.station_name_set = false;
    this.receive_digest = false;
    this.image_url = "";
    this.roles = [];
    this.avatar = "";
    this.password = "";
    this.password_confirmation = "";
    this.website = "";
    this.is_admin = false;
    this.user_votes = 0;
  }
}
