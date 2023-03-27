const fs = require('fs');

const rs = fs.createReadStream('./replyComplete.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./new-write.txt');

// // creates new file 'new-write'
// rs.on('data', (newData) => {
//   ws.write(newData);
// })

rs.pipe(ws); //same as code above, but faster and better