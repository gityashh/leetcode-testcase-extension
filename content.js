// 1. Capture the current page URL
const currentUrl = window.location.href;

// 2. Extract the title from the URL (Assuming URL format is like: https://leetcode.com/problems/question-title/)
const urlParts = currentUrl.split('/');
const questionTitle = urlParts[urlParts.length - 2];  // Get second last part, which should be the question title

// 3. Send the title to the backend using fetch
async function sendTitleToBackend(questionTitle) {
    try {
      const response = await fetch('http://localhost:3000/leetcode', {  // Use your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: questionTitle }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      console.log('Title sent successfully');
    } catch (error) {
      console.error('Error in sending request:', error);
    }
  }

// 4. Call the function to send the extracted title
try {
    const currentUrl = window.location.href;
    const urlParts = currentUrl.split('/');
    const questionTitle = urlParts[urlParts.length - 2];
  
    // Send the title to the backend
    sendTitleToBackend(questionTitle);
  } catch (error) {
    console.error("An error occurred in content script:", error);
  }