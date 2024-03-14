import { useState } from 'react'
import InfoCourses from './components/Courses/InfoCourses'
import Phonebook from './components/Phonebook/Phonebook'
import Countries from './components/Countries/Countries'
import BlogManager from './components/Blogs/BlogManager'

function App () {
  const [mode, setMode] = useState(3)

  const selectMode = () => {
    switch (mode) {
      case 0:
        return <InfoCourses />
      case 1:
        return <Phonebook />
      case 2:
        return <Countries />
      case 3:
        return <BlogManager />
      default:
        return <p>Opción no reconocida</p>
    }
  }

  return (
    <div className='App'>
      <button onClick={() => { setMode(0) }}>Courses</button>
      <button onClick={() => { setMode(1) }}>Phonebook</button>
      <button onClick={() => { setMode(2) }}>Countries</button>
      <button onClick={() => { setMode(3) }}>Blogs</button>

      {selectMode()}
    </div>
  )
}

export default App
