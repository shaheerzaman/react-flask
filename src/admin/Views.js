import View from './View'

const Views = ({ tasks } ) => {
  return (
    <>
      {tasks.map((task) => (
        <View key={task.id} task={task}  />
      ))
    }
    </>
  )
}

export default Views