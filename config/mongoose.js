const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/to_do_app');
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
    console.log('sucesfuly to db');
});
