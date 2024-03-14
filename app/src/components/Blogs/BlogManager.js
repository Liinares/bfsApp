import { useState, useEffect } from 'react'
import { getAllBlogs } from '../../services/blogs/getAllBlogs'
import LoginForm from './LoginForm'
import BlogForm from './Blogform'
import Blogs from './Blogs'

const BlogManager = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    getAllBlogs()
      .then(blogs => {
        setBlogs(blogs)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedBlogAppUser')
  }

  return (
    <div>
      <h1>Blogs</h1>
      <label style={{ color: 'red' }}>{error}</label>
      {user === null
        ? <LoginForm
            handleSetUser={user => setUser(user)}
            handleSetError={error => setError(error)}
          />
        : <BlogForm
            handleLogout={handleLogout}
            user={user}
            blogs={blogs}
            setBlogs={setBlogs}
            setError={setError}
          />}

      <Blogs blogs={blogs} />
    </div>
  )
}

export default BlogManager
