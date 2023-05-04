// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) {
//       if (details.url.startsWith("https://www.blockedsite.com")) {
//         return {cancel: true};
//       }
//     },
//     {urls: ["<all_urls>"]},
//     ["blocking"]
//   );
  
//   chrome.webRequest.onBeforeRedirect.addListener(
//     function(details) {
//       if (details.url.startsWith("https://www.blockedsite.com")) {
//         chrome.tabs.update(details.tabId, {url: "https://www.redirectedsite.com"});
//       }
//     },
//     {urls: ["<all_urls>"]}
//   );


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        console.log(request.time);
        chrome.notifications.create(
            {
                type: "basic",
                title: "Stay Hydrated",
                iconUrl: "../alert.png",
                message: "Have a sip of water human!",
                silent: false
            },
            () => { }
        )
        sendResponse({success: true});
    }
);
