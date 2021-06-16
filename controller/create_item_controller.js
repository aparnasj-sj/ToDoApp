const db=require('../config/mongoose');
const ToDoCollection=require('../models/toDo');

module.exports.Create=function(req,res){
    //console.log(req.body);
    ToDoCollection.create({
    description:req.body.description,
    category:req.body.category,
    dueDate:req.body.dueDate
},function(err,newItem){
    if(err){console.log('Error in inserting to db');return;}
    console.log(newItem);
    res.redirect('back');
    


});

    
}
//module.exports=Create;