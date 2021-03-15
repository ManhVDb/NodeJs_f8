const Course =require('../models/Course');


module.exports={
    meCourese: async (req,res)=>{
        try {
            const DataMe= await Course.find();
            me= DataMe.map(DataMe=>DataMe.toObject())
            res.render('me/stored-me',{me});
        } catch (error) {
            res.json({message: error});
        }
    }
}