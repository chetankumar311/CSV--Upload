const mongoose = require('mongoose');
require('dotenv').config()

 mongoose.connect('mongodb+srv://chetankumar509:chetan123@cluster0.20zy71p.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser:true
  });
// mongoose.connect(process.env.mongooseUrl);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error Connecting to Database!'));

db.once('open', function() {
  console.log("Successfully Connected to Database :: MongoDB");
});

module.exports = db;
