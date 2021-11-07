const mongoose = require('mongoose')
const MONGODB_URI = require('../utils/config').MONGODB_URI

mongoose.connect(MONGODB_URI)

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
