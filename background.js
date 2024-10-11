// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Received message in background:', message);
  
    // Send a response back to the content script
    sendResponse({ success: true });
  });