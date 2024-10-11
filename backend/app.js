const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/leetcode', (req, res) => {
    const { title } = req.body;
    console.log('Received title:', title);
    res.status(200).send({ message: 'Title received' });
  });
  
  app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
  });