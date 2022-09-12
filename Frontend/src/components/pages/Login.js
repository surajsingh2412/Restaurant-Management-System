



import React, { useState } from "react";
// import { Link } from "react-router-dom";

import { useRef} from "react";
import { login,logout,signup, useAuth } from "./firebase";
import { getAuth} from "firebase/auth";
import Swal from "sweetalert2";

import "../../login.css"

function Login() {

  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();
  
  const isUser = localStorage.getItem("isUser");
 const [userName ,setUserName] =useState("");

  const auth = getAuth();


  const emailRef = useRef();
  const passwordRef = useRef();
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  async function handleLogin() {

    setLoading(true);
   
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      localStorage.setItem("isUser", true);

      setIsSubmitted(true);
       localStorage.setItem("userName",userName);
       

      window.location.href = window.location.origin + "/";
    } catch {
      Swal.fire({
        icon: "error",
        title: "wrong info",
        text: "please check your login Info!"
      });
    
    }
    setLoading(false);

  }
  async function handleSignup() {
  setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      localStorage.setItem("isUser", true);
      setIsSubmitted(true);
       localStorage.setItem("userName",userName);
      window.location.href = window.location.origin + "/";
      
    } catch {
      Swal.fire({
        icon: "error",
        title: "wrong info",
        text: "please signup with correct Info!"
      });
      //alert("Error!");
    }
    setLoading(false);

}



  
  const renderForm = (

    
    <div className="form">
       <div> User: { currentUser?.email } </div>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label>Email </label>
          <input ref={emailRef} onChange={(e)=>{setUserName(e.target.value)}} type ="text" required />
          
        </div>
        <div className="input-container">
          <label>Password </label>
          <input ref={passwordRef} type="password"required />
          
        </div>

        
     <div className="loginbutton">
     <button disabled={ loading || currentUser } className="btn btn--primary btn--medium"  type="submit" onClick={handleSignup}>Sign Up</button>
      <button disabled={ loading || currentUser }  className="btn btn--primary btn--medium" type="submit"  onClick={handleLogin}>Log In</button>
      {/* <button disabled={ loading || !currentUser }  className="button-container" type="submit"  onClick={handleLogout}>Log Out</button> */}
     </div>
      
      </form>
    </div>
  );

  return (
    
    
          <div className="login">
            <div className="login-form">
              <div className="title">User</div>
              {isSubmitted ? (
                <div className="text">User is successfully logged in</div>
              ) : (
                renderForm
              )}
            </div>
          </div>
        );


   
  
}

export default Login;
