

import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { signup, login, logout, useAuth } from "../components/pages/firebase";


function Navbar({setLoading,handleLogout,loggedIn, setLoggedIn}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const userName =localStorage.getItem("userName");
  
  const isUser = localStorage.getItem("isUser");
  const isAdmin = localStorage.getItem("isAdmin");
  
  if (isUser==="true" && isAdmin==="true")
{
  localStorage.removeItem("isUser");
  window.location.reload();
  
}
async function handleLogout() {
  setLoading(true);
  try {
    await logout();

    localStorage.removeItem("isUser");
    localStorage.removeItem("userName");

    localStorage.removeItem("isAdmin");
  } catch {
    alert("Error!");
  }
  setLoading(false);
}
 

  const user = [
    {
      name: "Home",
      redirectTo: "/"
    },

    {
      name: "Menu",
      redirectTo: "/Menu2"
    },
    
    {
      name: "Orders",
      redirectTo: "/Orders"
    }
  ];

  const admin = [
    // {
    //   name: "Home",
    //   redirectTo: "/"
    // },
    {
      name: "Menu",
      redirectTo: "/Menu"
    },
    {
      name: "Orders",
      redirectTo: "/AdminOrders"
    },
    
    {
      name: "Inventory",
      redirectTo: "/Inventory"
    },
    {
      name: "Recipe",
      redirectTo: "/newRecipe"
    }
  ];

  const noone = [
    {
      name: "Home",
      redirectTo: "/"
    },
    {
      name: "Signup",
      redirectTo: "/SignUp"
    }
  ];
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  });

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Foodie
            <i class="fas fa-hamburger" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {isUser &&
              user.map((item) => (
                <li className="nav-item">
                  <Link
                    to={item.redirectTo}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            {isAdmin &&
              admin.map((item) => (
                <li className="nav-item">
                  <Link
                    to={item.redirectTo}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            {isUser === false &&
              isAdmin === false &&
              noone.map((item) => (
                <li className="nav-item">
                  <Link
                    to={item.redirectTo}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            
            
             <li className="nav-item">
              
              { isUser || isAdmin ? (""):(<Button
                className="nav-links"
                onClick={closeMobileMenu}
                component={Link}
                to="/Login"
              >
                User
              </Button>)}
              
            </li>
            <li className="nav-item">
              
        { isUser || isAdmin  ? (""):(
              <a href="/AdminLogin">
                <button className="btn btn--primary btn--medium">Admin</button>
              </a> 
              )} 
            </li>
           
            {isUser || isAdmin ? (
              <a href="/">
                <button
                  className="btn btn--primary btn--medium"
                  onClick={() => handleLogout()}
                >
                  Logout
                </button>
              </a>
            ) : (
              ""
            )}

          

            <li>
            { isAdmin &&

            <i class='fas fa-user-cog' style={{fontSize:'40px' ,color:'white'}} >
            </i>
}
            
            
            </li>
              
            <li>
            { isUser &&

            <i class='fas fa-user' style={{fontSize:'40px' ,color:'white'}} >
            </i>
}
            
            
            </li>





          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
