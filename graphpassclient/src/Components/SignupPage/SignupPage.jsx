import React from 'react'
import "./SignupPage.css"

const SignupPage = () => {
  return (
    <div>
      <h2>Signup Page</h2>

        <h4>Register Here (iff u dont have an acc) </h4>

      <div className="SignUPCont">  
        <div className="userinp">
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
        
        
        <div className="passwordone">

            <h1>IMAGES NOT IMP. REMEMBER SEQ OF SELECTION</h1>
          </div>
      </div>



    </div>
  )
}

export default SignupPage