//import React from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from "react";
require('dotenv').config()



async function loginUser(credentials) {
  return await fetch(process.env.REACT_APP_API_URL + '/user/login' , {
    method: 'POST',
    headers: {
      Accept: 'application/json',
         'Content-Type': 'application/json',
    },
    //Authorization: token,
    body: JSON.stringify(credentials)

  })
    
    .then(data => data.json())
    
 }

function Login() {
  const [user, setUser ] = useState('');
  const [pass, setPass ] = useState('');
  // const [token, setToken ] = useEffect(() => {
  //   token= {token}
  // });

  // const [pass, setPassword] = useState();

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const token = await loginUser({
  //     user,
  //     pass
  //   });
  //   setToken(token);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({user, pass,}).then(result => {
      console.log(result);
  });
   //setToken(token);  

}
  return(
    <div className="login-wrapper">
      <h1> Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUser(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPass(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}