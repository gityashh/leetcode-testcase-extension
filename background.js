// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // Extract the URL and title from the message
    const { url, title } = message;
    
    // Send the data to your backend (replace with your actual backend endpoint)
    fetch('http://localhost:3000/leetcode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url, title })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Data successfully sent to backend:', data);
    })
    .catch(error => {
      console.error('Error sending data to backend:', error);
    });
  });