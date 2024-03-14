const Blog = ({ blog, handleDeleteBlog }) => {
  return (
    <li className='blogs' key={blog.id}>
      <div>
        <strong>
          {blog.title}
        </strong>
      </div>
      <div>
        {blog.author}
      </div>
      <button onClick={() => { handleDeleteBlog(blog.id, blog.title) }}>
        Delete
      </button>
    </li>
  )
}

export default Blog
