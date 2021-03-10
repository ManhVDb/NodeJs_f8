const express = require('express');
const router= express.Router();

const homeController= require('../controller/homeControler');
const courseController= require('../controller/courseController');


//Router

router.get('/',homeController.getHome);
router.get('/create',courseController.create);
router.post('/store',courseController.store);

router.get('/:id/edit',courseController.edit);
router.put('/:id',courseController.update);
router.get('/:slug',courseController.slugShow);

module.exports=router;