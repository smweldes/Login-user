import React, { useContext } from 'react'
import { LoginContext } from './ContextApi';
import './home.css';

function Profile() {
    const { username } = useContext(LoginContext);
    const things = [
        {id: 1, name: 'Frank', address: 'San Francisco', email: 'frank@gmail.com'},
        {id: 2, name: 'Sam', address: 'Los Angeles', email:'sam@gmail.com'},
        {id: 3, name: 'David', address: 'Denver', email:'david@gmail.com'},
        {id: 4, name: 'John', address: 'Miami', email:'john@gmail.com'},
        {id: 5, name: 'Abel', address: 'Newyork', email:'abel@gmail.com'}
      ]
      
    return (
        <div className='pro'>
          <h1>Contact</h1>
          <h2>{username}</h2>
          <h2>{things.address}</h2>  
          <h2>{things.email}</h2> 
        </div>
    )
}

export default Profile;
