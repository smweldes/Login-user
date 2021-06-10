import React, { useContext } from 'react'
import { LoginContext } from './ContextApi';
import './home.css'

function Profile() {
    const { username } = useContext(LoginContext);
    return (
        <div className='pro'>
          <h1>Contact</h1>
          <h2>{username}</h2>
          <h3>Address: San Francisco</h3>
          <h3>Email: {username}@gmail.com</h3>
        </div>
    )
}

export default Profile;
