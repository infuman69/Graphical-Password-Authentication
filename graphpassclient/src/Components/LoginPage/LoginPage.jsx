import React from "react";
import { images } from "../image";
import "./LoginPage.css";

const LoginPage = () => {
  function nestedCopy(array) {
    return JSON.parse(JSON.stringify(array));
  }
  function shuffle(array) {
    let copyarray = nestedCopy(array);
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [copyarray[currentIndex], copyarray[randomIndex]] = [
        copyarray[randomIndex],
        copyarray[currentIndex],
      ];
    }

    return copyarray;
  }

  return (
    <div className="LoginCont">
      <div className="userdetails">
        <div className="userinput">
          <label htmlFor="username">User ID</label>
          <input type="text" name="username" id="username" />
        </div>

        <div className="userinput">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
      </div>
      <div className="password">
        {shuffle(images).map((img, pos) => (
          <img src={img} key={pos} />
        ))}
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default LoginPage;
