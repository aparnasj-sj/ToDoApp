const db=require('../config/mongoose');
const toDo=require('../models/toDo');

// exported fun created
module.exports.home=function(req,res){
    toDo.find({},function(err,items){
        if(err){console.log('error in fectching itemss ');return;}
        res.render('home',{title:'ToDo list  LIst ',items:items});// passing title as attr value pair
    });
}
// module.exports.actionName=function(req,res)
