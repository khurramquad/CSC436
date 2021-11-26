const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ToDoSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true,},
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    dateCreated: {type: Date, default: Date.now()},
    complete: {type:Boolean, default: false},
    completedOn:{type:Date, default:undefined}
  }
);

//Export model
module.exports = mongoose.model('ToDo', ToDoSchema);

