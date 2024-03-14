import Blog from './Blog'

const Blogs = ({ blogs }) => {
  const handleDeleteBlog = (id, title) => {
    console.log(`Delete ${title}`)
  }

  return (
    <div>
      <h3>Blogs</h3>
      <ul>
        {blogs
          .map((blog) => {
            return (
              <Blog key={blog.id} blog={blog} handleDeleteBlog={handleDeleteBlog} />
            )
          })}
      </ul>
    </div>
  )
}

export default Blogs
