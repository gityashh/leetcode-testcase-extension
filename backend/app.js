const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/leetcode', (req, res) => {
    const { url, title } = req.body;
    console.log(`Received URL: ${url}, Title: ${title}`);
    
    // Handle your logic here (e.g., generate test cases)
    
    res.send({ status: 'Success', message: 'Data received' });
  });
  
  app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
  });