import React from 'react'
import "./LoginPage.css"

const LoginPage = () => {
  return (
    <div>LoginPage
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>

      <div>
      <label htmlFor="username">User ID</label>
      <input type="text" name="username" id="username" />
      </div>

      <button type="submit">Login</button>
      
    </div>
  )
}

export default LoginPage