import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggedBloglistUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      console.log(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.error('Wrong credentials')
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBloglistUser')
    setUser(null)
  }

  const Header = () => (
    <div>
      <h2>Blog-List</h2>
      <div>
        <p>{user.name} logged in <button onClick={handleLogout}>Logout</button></p>
      </div>
    </div>
  )

  const Showblogs = () => (
    <div>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )

  const loginFormProps = { username, setUsername, password, setPassword, handleLogin }

  return (
    <div>
      {user
        ?
        <>
          <Header />
          <Showblogs />
        </>
        :
        <LoginForm {...loginFormProps} />
      }
    </div>
  )
}

export default App