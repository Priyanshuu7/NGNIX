const express = require("express");
const app = express();
const port = 5000;


// route code //
app.get("/", (req, res) => {
  res.send("Hello World!");
});


// server code //
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
