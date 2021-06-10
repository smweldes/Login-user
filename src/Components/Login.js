import React, { useState, useContext  } from 'react'
import './home.css'
import {LoginContext} from './ContextApi'

function Login() {

    const {setUsername, setShowProfile } = useContext(LoginContext);

    const things = [
        {id: 1, name: 'Frank', Address: 'San Francisco', email: 'frank@gmail.com'},
        {id: 2, name: 'Sam', Address: 'Los Angeles', email:'sam@gmail.com'},
        {id: 3, name: 'David', Address: 'Denver', email:'david@gmail.com'},
        {id: 4, name: 'John', Address: 'Miami', email:'john@gmail.com'},
        {id: 5, name: 'Abel', Address: 'Newyork', }
      ]

    return (
        <div className='log'>
            <input 
            placeholder='username...'
            type='text'
            onChange={(event) => {
                setUsername(event.target.value);
            }}
            />
            <input type='text' placeholder='password...'/>
            <button className='btn' onClick={() => {setShowProfile(true)}}>LOGIN</button>
        </div>
    )
}

export default Login;

