const express = require("express");
const router = express.Router();
const path = require("path");


router.get("^/$|/index(.html)?", (req, res) => {
  //to set index.html as a root destiination. Either would work
  //res.sendFile("./views/index.html", {root: __dirname});
  res.sendFile(path.join(__dirname, "..", 'views', 'index.html'));
});


module.exports = router;