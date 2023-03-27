const fsPromises = require('fs').promises;
const path = require('path'); //for not to hard code the path
const { text } = require('stream/consumers');


const fileOperations = async () => {
  try{
    const data = await fsPromises.readFile(path.join(__dirname,'text.txt'), 'utf8')
    console.log(data);
    //deletes text.txt after console logging it 
    await fsPromises.unlink(path.join(__dirname,'text.txt'))
    //creates reply.txt
    await fsPromises.writeFile(path.join(__dirname,'reply.txt'), data)
    //appends to reply.txt
    await fsPromises.appendFile(path.join(__dirname,'reply.txt'), '\nNice to meet you')
    //renames reply.txt
    await fsPromises.rename(path.join(__dirname,'reply.txt'), path.join(__dirname,'replyComplete.txt'))
   // to read new file back
    const newData = await fsPromises.readFile(path.join(__dirname,'replyComplete.txt'), 'utf8')
    console.log(newData)

  } catch (err) {
    console.log(err);
  }
};

fileOperations();

// //read file
// fs.readFile(path.join(__dirname,'text.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// //to create a response for read or to write. // what we want to write to file 
// fs.writeFile(path.join(__dirname,'reply.txt'), 'Hello back at ya', (err) => {
//   if (err) throw err;
//   console.log('Write was completed');

//   //good practice to keep appends inside write
//   fs.appendFile(path.join(__dirname,'reply.txt'), ' Append File', (err) => {
//     if (err) throw err;
//     console.log('Append was completed');
//   });
// });

// // will create a file if it doesnt exist, but will append it if it exists  
// // fs.appendFile(path.join(__dirname,'append.txt'), ' Append File', (err) => {
// //   if (err) throw err;
// //   console.log('Append was completed');
// // });



// exit on uncaught errors
// process.on('uncaughtExeption', err => {
//   console.error(`There was and uncaught Error: ${err}`);
//   process.exit(1);
// });