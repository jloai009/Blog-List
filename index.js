// const http = require('http')
const express = require('express')
const cors = require('cors')
const Blog = require('./models/blog')
const PORT = require('./utils/config').PORT
const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response, next) => {
  console.log('Incoming get')
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

app.post('/api/blogs', (request, response, next) => {
  console.log('POST', request.body)
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
