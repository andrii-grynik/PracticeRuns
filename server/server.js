const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

app.get("^/$|/index(.html)?", (req, res) => {
  //to set index.html as a root destiination. Either would work
  //res.sendFile("./views/index.html", {root: __dirname});
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get("/new-page(.html)?", (req, res) => {
  //to set route to new-page.html
  res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});
app.get("/old-page(.html)?", (req, res) => {
  //to set route to new-page.html
  res.redirect(301, '/new-page.html'); // will default to 302(which is not what we need, permanent change is 301 status, so we need to specify that)
});
app.get("/*", (req, res) => {
  //this will take care of routes out in as of /anything esle and will resut into 404 page, we chaned in 404 status for server report status
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
