const express = require("express");
const router = express.Router();
const path = require("path");


router.get("^/$|/index(.html)?", (req, res) => {
  //to set index.html as a root destiination. Either would work
  //res.sendFile("./views/index.html", {root: __dirname});
  res.sendFile(path.join(__dirname, "..", 'views', 'index.html'));
});
router.get("/new-page(.html)?", (req, res) => {
  //to set route to new-page.html
  res.sendFile(path.join(__dirname, "..", 'views', 'new-page.html'));
});
router.get("/old-page(.html)?", (req, res) => {
  //to set route to new-page.html
  res.redirect(301, '/new-page.html'); // will default to 302(which is not what we need, permanent change is 301 status, so we need to specify that)
});

module.exports = router;