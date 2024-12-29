const express = require("express");
const app = express();
express();

// port number //number
const port = 5000;

// route code //
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// server code //
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
