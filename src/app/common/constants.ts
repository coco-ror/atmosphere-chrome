import { environment } from '../../environments';
declare var jQuery: any;
export const SERVER_URL = environment.SERVER_URL;
export const FEED_PER_PAGE = 30;

export const EDITING_STATE = {
  ERROR: 0,
  GETTING_DRAFT_ID: 1,
  GOT_DRAFT_ID: 2,
  EDITING: 3          //Editing drafted or published state
};
export function clone(obj){
  return JSON.parse(JSON.stringify(obj));
}
export const EXTENSION_ID = "ebedkckodfppcbbnenkecjkbodnecdkm";
export const MAX_MOBILE_WIDTH = 800;
export const MAX_PHONE_WIDTH = 450;
export const FEATURE_SIZE = {
  SMALL: 0,
  MIDDLE: 1,
  LARGE: 2
};
export const NETWORK_TYPES = {
  PUBLIC: 0,
  PRIVATE: 1
}
export const NETWORK_KINDS = {
  NORMAL: 0,
  FOLLOWING: 1,
  SUGGESTED: 2
}

export const NETWORK_PERMISSION = {
  OWNER: 8,
  ADMIN: 5,
  MODERATOR: 6,
  CONTRIBUTOR: 7,
  SUBSCRIBER: 4
};
export const FEATURE_PAN_COLORS = [
  '#88CCCC', '#865642', '#6D3A25', '#AC7F24', '#65524C' , '#92A5C6', '#88CCCC'
];
export const DEFAULT_IMAGE_URL = 'assets/images/svg/R-Logo-tile.svg';
export const DEFAULT_SYNDICATE_HEADER_LIMIT = 65;
export const MESSAGES = {
  APP_CRASH_ERR: "Sorry for inconvenience. The app has been crashed and it will be reloaded in a second.",
  NETWORK_ERR: "An error occurred while trying to load data from our server. Please check your network connection.",
  LOGIN_PASS_ACC_EMPTY_ERR: "Please enter your email and password correctly.",
  LOGIN_ERR: "Please check your password again.",
  IMAGE_SIZE_WARN: "The image size might be not larger than 5MB.",
  IMAGE_TYPE_WARN: "Invalid image type.",
  TAG_LIMIT_WARN: "Tags are limited to 3 per article at this time.",
  EMAIL_WARN: "Please input valid email address.",
  NETWORK_NAME_NOT_VALID_WARN: "This Network name is not available.",
  CONTENT_EMPTY_WARN: "You must to add title or content.",
  TAG_EMPTY_WARN: "You must add at least 1 tag to proceed.",
  LOGIN_REQUIRED_WARN: "You need to sign in or sign up before continuing.",
  COMMENT_EMPTY_WARN: "You must add comment to syndicate.",
  COMMENT_FIELD_EMPTY_WARN: "The comment text should not be blank.",
  SELF_COMMENT_WARN: "You are not permitted to vote on your own comment.",
  VOTE_EMPTY_WARN: "You have 0 votes remaining.",
  SYNDICATION_DEL_WARN: "Are you sure you wish to delete this syndication?",
  SYNDICATION_ONE_DEL_WARN: "Deleting this syndication will remove this article from the news feeds.  Are you sure you wish to continue?",
  PROFILE_UPDATE_SUCCESS: "Your profile has been successfully updated.",
  MEMBERSHIP_UPDATE_SUCCESS: "Your membership has been successfully updated.",
  SYNDICATION_SUCCESS: "syndicated successfully.",
  FBPAGE_LINK_SUCCESS: "The Network has been linked with Facebook successfully.",
  INVITE_SUCCESS: "This contributor has been invited to this network",
  PUBLISH_SUCCESS: "Your article has been published.",
  SUBMIT_SUCCESS: "Your article has been submitted to the networks selected.",
  NETWORK_CREATING: "Network Creating"
};
export const ARTICLE_TYPE = {
  ARTICLE_TYPE_ORIGINAL : 0,
  ARTICLE_TYPE_EXTERNAL : 1
};

export const ARTICLE_STATE = {
  ARTICLE_STATE_DRAFT : 0,
  ARTICLE_STATE_PUBLISHED : 1,
  ARTICLE_STATE_HIDDEN : 2
}

export const UPDATE_FREQUENCY_TYPE = {
  UPDATE_FREQUENCY_MONTHLY : 0,
  UPDATE_FREQUENCY_WEEKLY : 1,
  UPDATE_FREQUENCY_DAILY : 2
}

export const SETTING_BLOCK_WIDTH = 680;
export const START_NETWORK_WIDTH = 136;
export const SMALL_HEADER_HEIGHT = 56;
export const TILE_SHRINK_WIDTH = 87;
export const SLIDER_ITEM_WIDTH = 177.5;
export const TILES_CONTAINER_HEIGHT = 240;
export const MEMBERSHIP_PLANS = {
  SILVER: 0,
  GOLD: 1
}
export const SIGN_UP_URL = SERVER_URL + "/../../users/sign_up";
export const ATMOSPHERE_PAGES: any = {
  MY_SYNDICATIONS_PAGE: 0,
  ATMOSPHERE_PAGE: 1,
  CONVERSATIONS_PAGE: 2,
  NOTIFICATIONS_PAGE: 3
};