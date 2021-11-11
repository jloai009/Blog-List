import React, { useState } from 'react'

const Blog = ({ blog }) => {
  const [showInfo, setShowInfo] = useState(false)
  const [buttonText, setButtonText] = useState('View')

  const toggleShowInfo = () => {
    setButtonText(showInfo ? 'View' : 'Hide')
    setShowInfo(!showInfo)
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const blogInfo = () => (
    <div>
      <div>{blog.url}</div>
      <div>
        Likes {blog.likes}&nbsp;
        <button> Like </button>
      </div>
      <div>{blog.user.username}</div>
    </div>
  )

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
        &ensp;
        <button onClick={toggleShowInfo}> {buttonText} </button>
      </div>
      {showInfo ? blogInfo() : null }
    </div>
  )
}

export default Blog