import React, { useState, useContext  } from 'react'
import './home.css'
import {LoginContext } from '../App'
import App from '../App';
function Login() {

    // console.log(LoginContext)
    

 const submitHandler = e =>{
     e.preventDefault();
     console.log(currentUser)
    //  filterNames(currentUser)
 }
 const [ currentUser, setCurrentUser] = useState([])
//  const filterNames = name=> data.filter(user => user.name = name)
 
    return (
        <div className='log'>
            <input 
            placeholder='username...'
            type='text'
            onChange={(event) => {
                setCurrentUser(event.target.value);
            }}
            />
            <input type='text' placeholder='password...'/>
            <button className='btn' onClick={submitHandler}>LOGIN</button>
            <pre>{JSON.stringify(currentUser,null,2)}</pre>
        </div>
    )
}

export default Login;

