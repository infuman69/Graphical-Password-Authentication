import React from 'react'
import "./SignupPage.css"

const SignupPage = () => {
  return (
    <div>SignupPage
        
        <div>
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" id="firstname" />
      </div>

      <div>
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" id="lasttname" />
      </div>

      <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
      </div>

      <div>
          <label htmlFor="username">User ID</label>
          <input type="text" name="username" id="username" />
      </div>


    </div>
  )
}

export default SignupPage