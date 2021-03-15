const Course =require('../models/Course');
const mongoose = require('mongoose');
const { count } = require('../models/Course');

module.exports={
    slugShow: async (req,res,next)=>{
        try {
            const showSlug= await Course.findOne({slug: req.params.slug});
            const show= showSlug ? showSlug.toObject() : showSlug; // nếu có trả về mảng object nếu không trả về showSlug theo json
            
            res.render('courses/show',{show});
          
        } catch (error) {
            res.json({message: error});
        }
    },

    create: async (req,res,next)=>{
        try {
            res.render('courses/create')
          
        } catch (error) {
            res.json({message: error});
        }
    },

    store: async(req,res)=>{
        try {
            const formData= req.body;
            formData.image=`https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
            const course = new Course(formData);
            course.save()
            .then(() => res.redirect(`/`))
            .catch(error => {
                
            });
            
        } catch (error) {
            res.json({message: error})
        }
    },
    edit: async (req,res,next)=>{
        try {
            const DataEdit=await Course.findById(req.params.id);
            const show= DataEdit ? DataEdit.toObject() : DataEdit; // nếu có trả về mảng object nếu không trả về showSlug theo json
            res.render('courses/edit',{show});
            
        } catch (error) {
            res.json({message: error});
        }
    },
    update: async (req,res,next)=>{
        try {
            Course.updateOne({_id: req.params.id},req.body)
            .then(()=> res.redirect('/me/stored/courses'))// trar ve header qua responst trinh duyet tu hieu vao diau huong
            .catch(next)

        } catch (error) {
            res.json({message : error})
        }
    },
    deleteCourse: async (req,res,next) =>{
        try {
             Course.deleteOne({_id: req.params.id})
             .then(() => res.redirect('back'))
        } catch (error) {
            res.json({message : error})            
        }
    }
}