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
    if (newBlog) {
      props.setBlogs(props.blogs.concat(newBlog))
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
