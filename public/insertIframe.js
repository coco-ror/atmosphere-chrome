{
  var isExtensionExist = document.querySelector("iframe[id='__clearidea_extension__']");
  console.log("Extension checking...");
  if(!isExtensionExist)
  {
      var clear_extension_iframe = document.createElement("iframe");
      clear_extension_iframe.src = chrome.extension.getURL("index.html");
      clear_extension_iframe.id = "__clearidea_extension__";
      clear_extension_iframe.style = "width: 360px; border: 0px; z-index: 2147483647; position: fixed; top: 0px; left: auto; right: 0px; height: 100%; display: block; margin: auto; border: 1px solid rgb(220, 220, 220);transition: transform 0.2s; transform: translateX(350px);";
      document.body.appendChild(clear_extension_iframe);
      document.closeExtension__clearidea_extension = function(){
        clear_extension_iframe.style.transform = "translateX(350px)";
        setTimeout(function () {
          document.getElementById('__clearidea_extension__').remove();
        }, 200);
      };
      setTimeout(function () {
        clear_extension_iframe.style.transform = "translateX(0px)";
      }, 100);
  }
  else {
    isExtensionExist.style.transform = "translateX(350px)";
    setTimeout(function () {
      document.getElementById('__clearidea_extension__').remove();
    }, 200);
  }
}
