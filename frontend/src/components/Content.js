import React, { useState, useEffect } from "react"
import CreateNew from "./CreateNew"
import Showblogs from "./Showblogs"
import blogService from "../services/blogs"

const Content = (props) => {
  const [blogs, setBlogs] = useState([])

  const setBlogsSorted = (blogs) => {
    setBlogs(blogs.sort((a, b) => b.likes - a.likes))
  }

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogsSorted( blogs )
    )
  }, [])

  const handleLike = async (id) => {
    const blog = blogs.find(b => b.id === id)

    const likedBlog = {
      ...blog,
      likes: blog.likes + 1,
      user: blog.user.id
    }

    try {
      const returnedBlog = await blogService.put(id, likedBlog)
      setBlogsSorted(blogs.map(blog => blog.id !== id ? blog : returnedBlog))
    } catch (error) {
      props.handleNotification('There was an error liking the blog', 'Error')
    }
  }

  const createNewProps = { blogs, setBlogs, handleNotification: props.handleNotification }
  const showblogsProps = { blogs, handleLike }

  return (
    <div>
      <CreateNew {...createNewProps}/>
      <Showblogs {...showblogsProps}/>
    </div>
    
  )
}

export default Content
