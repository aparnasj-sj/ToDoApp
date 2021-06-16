const mongoose=require('mongoose');
// schema
const todoSchema=new mongoose.Schema({
   description: {type:String,
    required:true

    },
    category:{
        type:String,required:true
    },
    dueDate:{
        type:Date,
        required:true

    }

});
// name of collection that will be using this schema
const ToDoCollection=mongoose.model('ToDoCollection',todoSchema);
//export the collection
module.exports=ToDoCollection;