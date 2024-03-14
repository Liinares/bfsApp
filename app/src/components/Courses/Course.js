import Content from './Content'
import Header from './Header'

const Course = ({ course }) => {
  if (typeof course === 'undefined') {
    return 'No hay cursos para mostrar'
  }

  const sumaEjercicios = course.parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0
  )

  return (
    <div id='Course'>
      <Header id={course.id} name={course.name} />
      <Content parts={course.parts} />
      <strong>La suma de ejercicios es {sumaEjercicios}</strong>
    </div>
  )
}

export default Course
