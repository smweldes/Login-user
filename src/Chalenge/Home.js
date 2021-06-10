import './App.css';
import Login from './Components/Login'
import React, { useState ,createContext, useContext } from 'react';
import Profile from './Components/Profile'

export const filterNames = name=> {data.filter(user => user.name = name)}


export const things = [
    {id: 1, name: 'Frank', Address: 'San Francisco', email: 'frank@gmail.com'},
    {id: 2, name: 'Sam', Address: 'Los Angeles', email:'sam@gmail.com'},
    {id: 3, name: 'David', Address: 'Denver', email:'david@gmail.com'},
    {id: 4, name: 'John', Address: 'Miami', email:'john@gmail.com'},
    {id: 5, name: 'Abel', Address: 'Newyork', email:'abel@gmail.com'}
  ]

 export const LoginContext = createContext({});



function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  const data = useContext(LoginContext);
  

  return (
    <LoginContext.Provider value={things}>
    <div className="App">
       {showProfile ? <Profile /> : <Login/>}
    </div>
    </LoginContext.Provider>
  );
}

export default App;
