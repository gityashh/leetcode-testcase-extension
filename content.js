// content.js
const currentUrl = window.location.href;
console.log('Sending URL to background:', currentUrl);

chrome.runtime.sendMessage({ url: currentUrl }, function(response) {
  console.log('Response from background:', response);
});