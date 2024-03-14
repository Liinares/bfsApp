const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => {
        return (
          <div key={part.id}>
            <h3>{part.name}</h3>
            <p>Exercises {part.exercises}</p>
            <p>id {part.id}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Content
