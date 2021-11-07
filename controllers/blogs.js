const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response, next) => {
  console.log('Incoming GET')
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
    .catch(error => {
      console.log(error)
      next(error)
    })
})

blogsRouter.post('/', (request, response, next) => {
  console.log('Incoming POST', request.body)
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      console.log('Response from MongoDB', result)
      response.status(201).json(result)
    })
    .catch(error => {
      console.log(error)
      next(error)
    })
})

module.exports = blogsRouter
