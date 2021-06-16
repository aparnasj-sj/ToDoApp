const express=require('express');
const port=8000;
const db=require('./config/mongoose');
const path=require('path');
const toDo=require('./models/toDo');
const app=express();
//const port=8000;
//app.set('view engine','ejs');
//app.set('views','./views');
//app.use(express.static('assets'));
app.set('view engine','ejs');//setting up view engine
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));//middleware
// use express router
app.use('/',require('./routes/index'));// for any path that come in url go to router->index.js file 
app.listen(port,function(err){
    if(err){
    console.log(`Error in connecting to port${port}`);return ;
    }
    console.log('Success');
});
app.get('/',function(req,res){
    
    res.render('home');
})