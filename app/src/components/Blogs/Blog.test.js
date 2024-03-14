import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'

import Blog from './Blog'

test('renders content', () => {
  const blog = {
    title: 'This is a test',
    author: 'AuthorTest'
  }

  render(<Blog blog={blog} />)

  screen.getByText('This is a test')
})

test('clicking the button calls event handle once', () => {
  const blog = {
    title: 'This is a test',
    author: 'AuthorTest'
  }

  const mockHandler = jest.fn()

  render(<Blog blog={blog} handleDeleteBlog={mockHandler} />)

  const button = screen.getByText('Delete')
  fireEvent.click(button)

  expect(mockHandler).toHaveBeenCalledTimes(1)
})
