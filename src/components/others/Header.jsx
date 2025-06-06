import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  // Safely get username, defaulting to 'Admin' if no data is provided
  const username = props.data ? props.data.firstName : 'Admin'

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser(null)
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{username} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header;