console.log('testing environment');
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.getSelected(null, function(tab) {
        var tabId = tab.id;
        tabUrl = tab.url;

        console.log(tab.url);
    });
  chrome.tabs.executeScript({
    file: "insertIframe.js"
  });
});
// chrome.tabs.onActivated.addListener(function(){
//   refreshSyndicationIcon();
// });
// chrome.tabs.onUpdated.addListener(function(){
//   chrome.tabs.query({active:true,windowType:"normal", currentWindow: true},function(tabs){
//     chrome.tabs.executeScript({
//       file: "insertIframe.js"
//     });
//   });
// });
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if(message.type == "exitExtension")
    {
      chrome.tabs.executeScript({
        file: "insertIframe.js"
      });
    }
    //Refresh extension ember app
    if(message.type == "extension_refresh")
    {

    }

    if(message.type == "sendPageData")
    {
      chrome.tabs.executeScript({
        file: "pageData.js"
      }, function(data){
        let res = data[0];
        sendResponse(res);
      });
      return true;
    }
    
    if(message.type === "extensionAuthenticated")
    {

    }
});
