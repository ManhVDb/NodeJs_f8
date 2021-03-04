const Course =require('../models/Course');
const mongoose = require('mongoose');

module.exports={
    getHome: async (req,res)=>{
        try {
            const gethome= await Course.find();
            getDate= gethome.map(gethome=>gethome.toObject())//chuyển từ kiểu oject mongoo sang object thuần
            res.render('home',{ getDate});
            // console.log(res.json(gethome));
        } catch (error) {
            res.json({message: error});
        }
    }
}