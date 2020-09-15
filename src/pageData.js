function getArticleData()
{
  var description1 = document.querySelector("meta[property=\'og:description\']");
  var description2 = document.querySelector("meta[property=\'twitter:description\']");
  var description3 = document.querySelector("meta[name=\'description\']");
  var url1 = document.querySelector("meta[property=\'og:url\']");
  var url2 = document.querySelector("link[rel=\'canonical\']");
  var image1 = document.querySelector("meta[property=\'og:image\']");
  var image2 = document.querySelector("meta[property=\'twitter:image:src\']");
  var title1 = document.querySelector("meta[property=\'og:title\']");
  var title2 = document.querySelector("meta[name=\'title\']");
  if (description1) description1 = description1.getAttribute("content");
  if (description2) description2 = description2.getAttribute("content");
  if (description3) description3 = description3.getAttribute("content");
  if (url1) url1 = url1.getAttribute("content");
  if (url2) url2 = url2.getAttribute("href");
  if (image1) image1 = image1.getAttribute("content");
  if (image2) image2 = image2.getAttribute("content");
  if (title1) title1 = title1.getAttribute("content");
  if (title2) title2 = title2.getAttribute("content");
  var result = {
     title1: title1 || "",
     title2: title2 || "",
     title3: document.title || "",
     description1: description1 || "",
     description2: description2 || "",
     description3: description3 || "",
     url1: url1 || "",
     url2: url2 || "",
     url3: document.URL || "",
     image1: image1 || "",
     image2: image2 || "",
  };
  var title = result.title1;
  if(title === "")
    title = result.title2;
  if(title === "")
    title = result.title3;
  var url = result.url1;
  if(url === "")
    url = result.url2;
  if(url === "")
    url = result.url3;
  var image_url = result.image1;
  if(image_url === "")
    image_url = result.image2;
  var description = result.description1;
  if(description === "")
    description = result.description2;
  if(description === "")
   description = result.description3;
   var me = {};
   me.url = url;
   me.title = title;
   me.description = description;
   me.image_url = image_url;
   return me;
}
var pageData = getArticleData();
pageData
