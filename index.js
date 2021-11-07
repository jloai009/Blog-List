// const http = require('http')
const express = require('express')
const cors = require('cors')
const Blog = require('./models/blog')
const { Mongoose } = require('mongoose')
const { MONGODB_URI, PORT } = require('./utils/config')
const app = require('../Node.js and Express Exercises/NotesApp backend/app')

const mongoUrl = MONGODB_URI
Mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
