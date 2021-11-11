import React, { useState } from "react";
import blogService from '../services/blogs'

const CreateNew = (props) => {
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

    const response = await blogService.create(blogObject)
    if (response.status === 201) {
      props.setBlogs(props.blogs.concat(response.data))
      props.handleNotification("Blog Created")
      setTitle('')
      setAuthor('')
      setUrl('')
    } else {
      props.handleNotification(response.message, "Error")
    }
  }

  return (
    <div>
      <h3>Create New</h3>
      <form onSubmit={handleCreateNew}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            name="Title"
            onChange={({ target }) => { setTitle(target.value) }}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            name="Author"
            onChange={({ target }) => { setAuthor(target.value) }}
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="text"
            value={url}
            name="URL"
            onChange={({ target }) => { setUrl(target.value) }}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateNew
