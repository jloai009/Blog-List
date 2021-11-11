import React from "react"
import Blog from "./Blog"

const Showblogs = (props) => (
  <div>
    {props.blogs.map(blog =>
      <Blog key={blog.id} blog={blog} handleLike={props.handleLike} />
    )}
  </div>
)

export default Showblogs
