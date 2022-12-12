const express=require('express');
const route=express.Router();
const reg=require('./UserControllers');

route.route('/register').post(reg);
route.route('/product').delete(reg);
module.exports=route;