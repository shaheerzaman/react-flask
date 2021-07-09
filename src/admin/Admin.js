import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Views from './Views'

const Admin  = () =>  {
    const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const data  = await fetchTasks()
      setTasks(data)
    }

    getTasks()
  }, [])

  // Fetch Views
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/admin')
    const data = await res.json()
    console.log(data)
    return data
  }

    return (
        <div className='container'>
        <Header />
        <Link to='/main'>Main</Link>
    
        {tasks.length > 0 ? (<Views tasks={tasks} />) : ('No Tasks To Show')}
        </div>
    )
}

export default Admin