import React, { useState } from "react";

//import '../../App.css';
import "../../signup.css";

function SignUp() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "suraj",
      password: "singh",
      confipass: "singh",
      Eamil: "singhsuraj61005@gmail.com"
      
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
    Email: "inavalid mail"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>

        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label> Confirm Password </label>
          <input type="password" name="confpass" required />
          {renderErrorMessage("confpass")}
        </div>
        <div className="input-container">
          <label>Email ID </label>
          <input type="email" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="checkbox">
          <input type="checkbox" name="checkbox" id="checkbox" required />
          <span>
            I agree all statements in{" "}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms of service
            </a>
          </span>
          .
        </div>

        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="SignUp">
      <div className="login-form">
        <div className="title">SignUp</div>
        {isSubmitted ? (
          <div className="text">Thank you for Registration</div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default SignUp;
