const db=require('../config/mongoose');
const ToDoCollection=require('../models/toDo');

module.exports.Delete=function(req,res){
   // get if from url
   // delete by id using query from checkbox value passed // body dint work 
   console.log('delet pg ');
   let id=req.body.id;
   ToDoCollection.findByIdAndDelete(id,function(err){
      if(err){console.log('Error in dleeting from db');}
   });
   res.redirect('back');
    
}