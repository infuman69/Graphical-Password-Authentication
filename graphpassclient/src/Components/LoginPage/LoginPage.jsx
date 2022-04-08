import React from 'react'
import "./LoginPage.css"

const LoginPage = () => {
  return (
    <div className="LoginCont">
      
        <div className="userdetails">

            <div className="userinput">
                <label htmlFor="username">User ID</label>
                <input type="text" name="username" id="username" />
            </div>

            <div className='userinput'>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
            </div>
      
        </div>
        <div className="password">
            <h1>Password</h1>
        </div>
    </div>
  )
}

export default LoginPage