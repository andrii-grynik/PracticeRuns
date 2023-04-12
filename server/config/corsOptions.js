// we can create a whitelist for cors access. 
// whitelist will prevent other websites to acces your backend, so make sure to whitelist your frontend in order to only limit it to one source
const  whitelist = [
  'your site',
  'more websites', 
  'and even more sites'];

const corsOptions = {
 origin: (origin, callback) => {
   if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
    } else {
        callback(new Error('Not Allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
}

module.exports = corsOptions;