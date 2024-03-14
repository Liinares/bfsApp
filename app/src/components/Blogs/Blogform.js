import Togglable from '../Togglable'
import { createBlog } from '../../services/blogs/createBlog'
import { useRef, useState } from 'react'

const BlogForm = ({ handleLogout, user, blogs, setBlogs, setError }) => {
  const togglableRef = useRef()

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleBlogSubmit = async (event) => {
    event.preventDefault()
    console.log('Blog submit')
    try {
      const blogToCreate = {
        title,
        author,
        url
      }

      const { token } = user

      const blog = await createBlog(blogToCreate, token)

      console.log(blog)

      setBlogs(blogs.concat(blog))
      setTitle('')
      setAuthor('')
      togglableRef.current.toggleVisibility()
    } catch (e) {
      console.log(e)
      setError('Create blog error')
    }
  }

  return (
    <div>
      <Togglable labelButton='create blog' ref={togglableRef}>
        <div>
          <h3> Create new Blog</h3>
          <form onSubmit={handleBlogSubmit}>
            <input
              type='text'
              value={title}
              name='Title'
              placeholder='Title'
              onChange={event => setTitle(event.target.value)}
            />
            <input
              type='text'
              value={author}
              name='Author'
              placeholder='Author'
              onChange={event => setAuthor(event.target.value)}
            />
            <input
              type='text'
              value={url}
              name='Url'
              placeholder='Url'
              onChange={event => setUrl(event.target.value)}
            />
            <button>
              Create new blog
            </button>
          </form>
        </div>
      </Togglable>
      <button onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  )
}

export default BlogForm
