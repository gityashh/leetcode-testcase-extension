// content.js
// Extracts the current URL of the page
const currentUrl = window.location.href;

// Extract the question title from the URL
// LeetCode question titles are usually part of the URL, so let's split the URL
const parts = currentUrl.split('/');
const questionTitle = parts[parts.length - 2];  // This will give you the title part before the ID

// Log the URL and question title
console.log("URL:", currentUrl);
console.log("Question Title:", questionTitle);

// Send the URL and title to the background script
chrome.runtime.sendMessage({
  url: currentUrl,
  title: questionTitle
});