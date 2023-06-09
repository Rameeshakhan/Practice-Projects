import React from 'react'

const AddUser = () => {
  return (
     <form>
      <label className='label'>Username</label>
      <input className="input" type="text"/>
      <label className='label'>Age</label>
      <input className="input" type="number"/>
      <input className='button' type="submit" value="Add User" />
    </form>
  )
}

export default AddUser
