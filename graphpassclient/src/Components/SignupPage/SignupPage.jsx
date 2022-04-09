import React, { useState } from "react";
import { images } from "../image";
import "./SignupPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const SignupPage = () => {
  let [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: [],
  });
  const handleClick = (e, pos) => {
    setFormData({
      ...formData,
      [e.target.name]: [...formData[e.target.name], pos],
    });
    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (!Object.values(formData).every((item) => item !== "")) {
      toast.error("Please Complete all the fields");
      return;
    } else if (
      !formData.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      toast.error("Please enter a valid email id");
      return;
    } else if (!formData.username.match(/^(?=.*[a-zA-Z])(?=.*[0-9])/)) {
      toast.error("Username should at least one digit and character");
      return;
    } else if (!formData.firstname.match(/^[A-Za-z]+$/)) {
      toast.error("FirstName should only be letters");
      return;
    } else if (!formData.lastname.match(/^[A-Za-z]+$/)) {
      toast.error("LastName should be characters");
      return;
    }
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/signup",
      data: formData,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Signup Page</h2>

      <h4>Register Here (iff u dont have an acc) </h4>

      <div className="SignUPCont">
        <form onSubmit={handleSubmit}>
          <div className="userinp">
            <div>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lasttname"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="passwordone">
            {images.map((img, pos) => (
              <img
                src={img}
                key={pos}
                name="password"
                onClick={(e) => {
                  handleClick(e, pos);
                }}
              />
            ))}
            <button type="submit">Sign Up</button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
