import React, { useState } from "react"
import CreateNew from "./CreateNew"
import Showblogs from "./Showblogs"
import blogService from "../services/blogs"

const Content = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleCreateNew = async (event) => {
    event.preventDefault()

    const blogObject = {
      title: title,
      author: author,
      url: url
    }

    const newBlog = await blogService.create(blogObject)
    if (newBlog !== 400) {
      props.setBlogs(props.blogs.concat(newBlog))
      props.handleNotification("Blog Created")
      setTitle('')
      setAuthor('')
      setUrl('')
    } else {
      props.handleNotification("Error: blogs must have a title and a URL", "Error")
    }
  }

  const createNewProps = {
    title, setTitle,
    author, setAuthor,
    url, setUrl,
    handleCreateNew
  }

  return (
    <div>
      <CreateNew {...createNewProps}/>
      <Showblogs blogs={props.blogs}/>
    </div>
    
  )
}

export default Content
