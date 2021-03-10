const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Course = new Schema({
    name:{type: String , required: true},// required: true trường bắt buộc
    description: {type: String},
    image: {type: String},
    videoId:{type :String , required: true},
    slug: { type: String, slug: 'name' , unique: true}// thêm từ thư viện mongoose-slug-generator, unique: true: chỉ tồn tại 1 cái


    // createdAt: {type: Date, default: Date.now},//lưu thời gian được tạo
    // updatedAt: {type: Date, default: Date.now}//Lưu thời gian được cập nhật
  },{
    timestamps: true
  });

  module.exports=mongoose.model('Course', Course);