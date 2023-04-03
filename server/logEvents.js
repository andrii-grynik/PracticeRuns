const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs'); 
const fsPromises = require('fs').promises;
const path = require('path');


const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try { // if folder doesnt exist it will make one 
      if (!fs.existsSync(path.join(__dirname, 'logs'))) {
        await fsPromises.mkdir(path.join(__dirname, 'logs'));
      }
      // will create and append eventlog file, and will populate logItem const
      await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem); 
  } catch (err) {
    console.log(err);
  }
};


module.exports = logEvents;





//console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

//console.log(uuid());