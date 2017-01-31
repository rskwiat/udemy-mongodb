const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String
  //content
  //creationDate
});

module.exports = PostSchema;
