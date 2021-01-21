chrome.browserAction.onClicked.addListener(function(activeTab)
{
    chrome.windows.create({ url: chrome.runtime.getURL("popup.html"), type: 
    "popup" });
});