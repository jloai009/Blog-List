import React, { useState, useEffect } from "react"
import CreateNew from "./CreateNew"
import Showblogs from "./Showblogs"
import blogService from "../services/blogs"

const Content = (props) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  const createNewProps = { blogs, setBlogs, handleNotification: props.handleNotification }
  const showblogsProps = { blogs }

  return (
    <div>
      <CreateNew {...createNewProps}/>
      <Showblogs {...showblogsProps}/>
    </div>
    
  )
}

export default Content
