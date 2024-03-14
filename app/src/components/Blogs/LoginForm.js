import Togglable from '../Togglable'
import { useState } from 'react'
import { loginService } from '../../services/login/login'
import PropTypes from 'prop-types'

const LoginForm = ({ handleSetUser, handleSetError }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLoginSubmit = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService({
        username,
        password
      })

      window.localStorage.setItem(
        'loggedBlogAppUser', JSON.stringify(user)
      )

      handleSetUser(user)
      setUsername('')
      setPassword('')
    } catch (e) {
      console.error(e)
      handleSetError('Login error')
    }
  }

  return (
    <Togglable labelButton='login'>
      <form onSubmit={handleLoginSubmit}>
        <input
          type='text'
          value={username}
          name='Username'
          placeholder='Username'
          onChange={event => setUsername(event.target.value)}
        />
        <input
          type='password'
          value={password}
          name='Password'
          placeholder='Password'
          onChange={event => setPassword(event.target.value)}
        />
        <div>
          <button>
            Login
          </button>
        </div>
      </form>
    </Togglable>
  )
}

LoginForm.propTypes = {
  handleSetUser: PropTypes.func.isRequired,
  handleSetError: PropTypes.func.isRequired
}

export default LoginForm
