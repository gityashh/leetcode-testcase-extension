const express = require("express");
const app = express();
const indexRouter = require("./routes/index-router");
const puppeteerConfig = require("./config/puppeteer.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (res, req) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})