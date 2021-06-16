const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');// require the home conteoller 
const createItemcontroller=require('../controller/create_item_controller');
const deleteItemcontroller=require('../controller/delete_item_controller');
router.get('/',homeController.home);// home function in home controller executed
router.post('/create-item',createItemcontroller.Create);
router.post('/delete-item',deleteItemcontroller.Delete);

module.exports=router;