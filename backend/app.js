const express = require("express");
const app = express();
const indexRouter = require("./routes/index-router");
const puppeteerConfig = require("./config/puppeteer.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/leetcode', (req, res) => {
    const { url, title } = req.body;
    console.log(`Received URL: ${url}, Title: ${title}`);
    
    // Handle your logic here (e.g., generate test cases)
    
    res.send({ status: 'Success', message: 'Data received' });
  });
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });