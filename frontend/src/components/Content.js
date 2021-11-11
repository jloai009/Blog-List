import React, { useState, useEffect } from "react"
import CreateNew from "./CreateNew"
import Showblogs from "./Showblogs"
import blogService from "../services/blogs"

const Content = (props) => {
const [blogs, setBlogs] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')


  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  const handleCreateNew = async (event) => {
    event.preventDefault()

    const blogObject = {
      title: title,
      author: author,
      url: url
    }

    const response = await blogService.create(blogObject)
    if (response.status === 201) {
      setBlogs(blogs.concat(response.data))
      props.handleNotification("Blog Created")
      setTitle('')
      setAuthor('')
      setUrl('')
    } else {
      props.handleNotification(response.error, "Error")
    }
  }

  const createNewProps = {
    title, setTitle,
    author, setAuthor,
    url, setUrl,
    handleCreateNew
  }

  const showblogsProps = { blogs }

  return (
    <div>
      <CreateNew {...createNewProps}/>
      <Showblogs {...showblogsProps}/>
    </div>
    
  )
}

export default Content
