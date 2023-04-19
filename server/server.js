require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors'); 
const cookieParser = require('cookie-parser');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
//const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');



//const corsOptions = require('./config/corsOptions');  //uncomment for whitelisting

//const { response } = require('express');
const PORT = process.env.PORT || 3500;

//connect to MongoDB
connectDB();

//custom middleware logger
app.use(logger);


app.use(cors(/*corsOptions*/)); // uncomment to turn on whitelisting 


//to handle url encoded data. 
app.use(express.urlencoded({ extended: false}));

//built in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));



// routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use(verifyJWT);// to make sure its verified anything after this
app.use('/employees', require('./routes/api/employees'));



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

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});