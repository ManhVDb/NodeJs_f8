const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    name:{type: String},
    description: {type: String},
    image: {type: String},
    createdAt: {type: Date, default: Date.now},//lưu thời gian được tạo
    updatedAt: {type: Date, default: Date.now}//Lưu thời gian được cập nhật
  });

  module.exports=mongoose.model('Course', Course);

