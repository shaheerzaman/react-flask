import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!firstName || !lastName || !age) {
      alert('Please add a task')
      return
    }

    onAdd({ firstName, lastName, age })

    setFirstName('')
    setLastName('')
    setAge('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>First Name</label>
        <input
          type='text'
          placeholder='Add First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Last Name</label>
        <input
          type='text'
          placeholder='Add Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Age</label>
        <input
          type='text'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask