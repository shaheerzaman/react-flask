
const Task = ({ task }) => {
  return (
    <div
      className={`task`}
      
    >
      <h3>
        {task.firstName}
      </h3>
      <h5>
        {task.lastName}
      </h5>
      <p>{task.age}</p>
    </div>
  )
}

export default Task