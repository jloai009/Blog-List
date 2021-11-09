const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

blogsRouter.get('/', async (request, response, next) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs)
})

blogsRouter.post('/', async (request, response, next) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const blog = new Blog(request.body)

  const user = await User.findById(decodedToken.id)
  blog.user = user._id.toString()
  user.blogs = user.blogs.concat(blog._id)
  user.save()

  let result = await blog.save()
  result = await result.populate('user', { username: 1, name: 1 })

  response.status(201).json(result)
})

blogsRouter.delete('/:id', async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)
  const blog = await Blog.findById(request.params.id)
  console.log(blog.user.toString(), user._id.toString())
  if (blog.user.toString() !== user._id.toString()) {
    return response.status(401).json({ error: 'no permission to delete blog' })
  }

  await Blog.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {
  const blog = {
    title: request.body.title,
    url: request.body.url,
    likes: request.body.likes
  }

  const updatedBlog =
    await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })

  response.json(updatedBlog)
})

module.exports = blogsRouter
