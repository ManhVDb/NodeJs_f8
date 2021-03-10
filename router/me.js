const express = require('express');
const router= express.Router();

const meController= require('../controller/meControler');
//Router

router.get('/stored/courses',meController.meCourese);

module.exports=router;