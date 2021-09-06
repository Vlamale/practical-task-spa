const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 5000
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

// start express server on port 5000
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});