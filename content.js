// Get the problem slug from the URL
const url = window.location.href;
const problemSlug = url.split('/problems/')[1].split('/')[0];

// Function to scrape problem data from the LeetCode page
async function getLeetCodeProblemData(slug) {
  const response = await fetch(url);
  const htmlText = await response.text();

  // Create a new DOM parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, 'text/html');

  // Extract problem description and test cases (example structure may vary)
  const problemDescription = doc.querySelector('.description__24sA').innerText;
  console.log(problemDescription);
  const exampleTestCases = doc.querySelectorAll('.sample-testcase__eWtI pre');
  console.log(exampleTestCases);

  // Format the test cases into an array
  let testCases = [];
  exampleTestCases.forEach(testCase => {
    testCases.push(testCase.innerText);
  });

  return { problemDescription, testCases };
}

// Create a container for the scraped test cases
const testcaseContainer = document.createElement('div');
testcaseContainer.style.position = 'fixed';
testcaseContainer.style.top = '10px';
testcaseContainer.style.right = '10px';
testcaseContainer.style.padding = '20px';
testcaseContainer.style.backgroundColor = '#000';
testcaseContainer.style.border = '1px solid #ccc';
testcaseContainer.style.zIndex = '9999';
testcaseContainer.style.maxWidth = '300px';
testcaseContainer.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
testcaseContainer.innerHTML = `<h3>Example Test Cases</h3><p>Loading...</p>`;
document.body.appendChild(testcaseContainer);

// Call the function and display the data
getLeetCodeProblemData(problemSlug).then(data => {
  if (data.testCases.length > 0) {
    testcaseContainer.innerHTML = `
      <h3>Example Test Cases</h3>
      <pre>${data.testCases.join('\n\n')}</pre>
    `;
  } else {
    testcaseContainer.innerHTML = `
      <h3>Example Test Cases</h3>
      <p>No test cases found for this problem.</p>
    `;
  }
});
