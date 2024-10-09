const express = require("express");
const app = express();
const indexRouter = require("./routes/index-router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})