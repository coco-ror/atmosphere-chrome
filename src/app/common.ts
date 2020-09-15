import { environment } from '../environments';
declare var jQuery: any;
export function drawCanvas(canvas_obj, image_url, max_width, max_height)
{
  let context_obj = canvas_obj.getContext('2d');
  context_obj.save();
  context_obj.setTransform(1, 0, 0, 1, 0, 0);
  context_obj.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
  context_obj.restore();
  let imageObj = new Image();
  imageObj.src = image_url;
  imageObj.onload = function(){
    let iw = imageObj.width;
    let ih = imageObj.height;
    max_width = canvas_obj.width;
    max_height = canvas_obj.height;
    let scale = Math.max( ( max_width / iw ), ( max_height / ih ) );
    let sw = iw * scale;
    let sh = ih * scale;
    let sourceX = 0;
    let sourceY = 0;
    let destX = (canvas_obj.width - sw ) / 2;
    let destY = (canvas_obj.height - sh ) / 2;
    let destWidth = iw * scale;
    let destHeight = ih * scale;
    context_obj.drawImage(
        imageObj,
        sourceX,
        sourceY,
        iw,
        ih,
        destX,
        destY,
        destWidth,
        destHeight
    );
  };
  imageObj.onerror = function(){
    if(image_url != DEFAULT_IMAGE_URL)
      drawCanvas(canvas_obj, DEFAULT_IMAGE_URL, max_width, max_height);
  }
}
export function drawSyndicateCanvas(canvas_obj, image_url, parent_container)
{
  let context_obj = canvas_obj.getContext('2d');
  context_obj.save();
  context_obj.setTransform(1, 0, 0, 1, 0, 0);
  context_obj.clearRect(0, 0, canvas_obj.width, canvas_obj.height);
  context_obj.restore();
  let imageObj = new Image();
  imageObj.src = image_url;
  imageObj.onload = function(){
    let max_width = parent_container.width();
    let max_height = parent_container.height();
    let iw = imageObj.width;
    let ih = imageObj.height;
    canvas_obj.width = max_width;
    canvas_obj.height = max_height;
    let scale = Math.max( ( max_width / iw ), ( max_height / ih ) );
    let sw = iw * scale;
    let sh = ih * scale;
    let sourceX = 0;
    let sourceY = 0;
    let destX = (canvas_obj.width - sw ) / 2;
    let destY = (canvas_obj.height - sh ) / 2;
    let destWidth = iw * scale;
    let destHeight = ih * scale;
    context_obj.drawImage(
        imageObj,
        sourceX,
        sourceY,
        iw,
        ih,
        destX,
        destY,
        destWidth,
        destHeight
    );
  };
  imageObj.onerror = function(){
    if(image_url != DEFAULT_IMAGE_URL)
      drawSyndicateCanvas(canvas_obj, DEFAULT_IMAGE_URL, parent_container);
  }
}

export function drawFeatureCanvas(canvas_obj, image_url, article_title, estimate_read_time, syndication_count, banner, size)
{
  let canvas_width = 600, canvas_height = 600;
  if(size == FEATURE_SIZE.SMALL)
    canvas_width = 300;
  if(size <= FEATURE_SIZE.MIDDLE)
    canvas_height = 300;
  let context_obj = canvas_obj.getContext('2d');
  let imageObj = new Image();
  imageObj.src = image_url;
  // console.log("Pixel ratio: ", PIXEL_RATIO);
  imageObj.onload = function(){
    let iw = imageObj.width;
    let ih = imageObj.height;
    // canvas_obj.width = max_width;
    // canvas_obj.height = max_height;
    let scale = Math.max( ( canvas_width / iw ), ( canvas_height / ih ) );
    let sw = iw * scale;
    let sh = ih * scale;
    let sourceX = 0;
    let sourceY = 0;
    let destX = (canvas_width - sw ) / 2;
    let destY = (canvas_height - sh ) / 2;
    let destWidth = iw * scale;
    let destHeight = ih * scale;
    context_obj.drawImage(
        imageObj,
        sourceX,
        sourceY,
        iw,
        ih,
        destX,
        destY,
        destWidth,
        destHeight
    );
  };
  imageObj.onerror = function(){
    if(image_url != DEFAULT_IMAGE_URL)
      drawFeatureCanvas(canvas_obj, DEFAULT_IMAGE_URL, article_title, estimate_read_time, syndication_count, banner, size);
  }
}
export function calculateReplies(comments): number{
  let comments_count = 0;
  for(let i = 0; i < comments.length; i++){
   if(comments[i].replies == null)
     comments[i].replies = [];
   comments_count += 1 + calculateReplies(comments[i].replies);
  }
  return comments_count;
}
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
export const FEATURE_SIZE = {
  SMALL: 0,
  MIDDLE: 1,
  LARGE: 2
};
export const DEFAULT_IMAGE_URL = 'assets/images/svg/R-Logo-tile.svg';
export const MESSAGES = {
  APP_CRASH_ERR: "Sorry for inconvenience. The app has been crashed and it will be reloaded in a second.",
  NETWORK_ERR: "An error occurred while trying to load data from our server. Please check your network connection.",
  LOGIN_PASS_ACC_EMPTY_ERR: "Please enter your email and password correctly.",
  LOGIN_ERR: "Please check your password again.",
  IMAGE_SIZE_WARN: "The image size might be not larger than 5MB.",
  IMAGE_TYPE_WARN: "Invalid image type.",
  TAG_LIMIT_WARN: "Tags are limited to 3 per article at this time.",
  CONTENT_EMPTY_WARN: "You must to add title or content.",
  TAG_EMPTY_WARN: "You must add at least 1 tag to proceed.",
  LOGIN_REQUIRED_WARN: "You need to sign in or sign up before continuing.",
  COMMENT_EMPTY_WARN: "You must add comment to syndicate.",
  SELF_COMMENT_WARN: "You are not permitted to vote on your own comment.",
  VOTE_EMPTY_WARN: "You have 0 votes remaining.",
  SYNDICATION_DEL_WARN: "Are you sure you wish to delete this syndication?",
  SYNDICATION_ONE_DEL_WARN: "Deleting this syndication will remove this article from the news feeds.  Are you sure you wish to continue?",
  PROFILE_UPDATE_SUCCESS: "Your profile has been successfully updated.",
  SYNDICATION_SUCCESS: "syndicated successfully."
};
