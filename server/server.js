const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors'); 
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');


//const { response } = require('express');
const PORT = process.env.PORT || 3500;

//custom middleware logger
app.use(logger);

// we can create a whitelist for cors access. 
// whitelist will prevent other websites to acces your backend, so make sure to whitelist your frontend in order to only limit it to one source
// const  whitelist = ['your site','more websites', 'and even more sites'];
// const corsOptions = {
//  origin: (origin, callback) => {
//    if (whitelist.indexOf(origin) !== -1 || !origin) {
        //callback(null, true)
    //} else {
        //callbackify(new Error('Not Allowed by CORS'));
    //}
  //},
  //optionsSuccessStatus: 200
//}
app.use(cors(/*corsOptions*/)); // uncomment to turn on whitelisting 





//to handle url encoded data. 
app.use(express.urlencoded({ extended: false}));

//built in middleware for json
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, '/public')));

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

app.all("*", (req, res) => {
  //this will take care of routes out in as of /anything esle and will resut into 404 page, we chaned in 404 status for server report status
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
  
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
