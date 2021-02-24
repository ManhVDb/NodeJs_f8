const express = require('express');
const router= express.Router();

const homeController= require('../controller/homeControler');


//Router

router.get('/',homeController.getHome);



module.exports=router;