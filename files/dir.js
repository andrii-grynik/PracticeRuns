const fs = require('fs');

//checks if directory does not exist and creates one if needed
if(!fs.existsSync('./new')) {
  fs.mkdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory created')
  });
};

//deletes directory if it exists
if(fs.existsSync('./new')) {
  fs.rmdir('./new', (err) => {
    if (err) throw err;
    console.log('Directory removed')
  });
};