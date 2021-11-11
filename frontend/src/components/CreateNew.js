import React from "react";

const CreateNew = (props) => {
  return (
    <div>
      <h3>Create New</h3>
      <form onSubmit={props.handleCreateNew}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={props.title}
            name="Title"
            onChange={({ target }) => { props.setTitle(target.value) }}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={props.author}
            name="Author"
            onChange={({ target }) => { props.setAuthor(target.value) }}
          />
        </div>
        <div>
          <label>URL:</label>
          <input
            type="text"
            value={props.url}
            name="URL"
            onChange={({ target }) => { props.setUrl(target.value) }}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateNew
