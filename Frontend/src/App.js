import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/pages/Menu";
// import SignUp from "./components/Authentication/Signup";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import AdminLogin from "./components/pages/AdminLogin";
import AddMenu from "./components/pages/AddMenu";
import Inventory from "./components/pages/Inventory";
import Orders from "./components/pages/Orders";
import Menu2 from "./components/pages/Menu2";
import newRecipe from "./components/pages/newRecipe";
import Footer from "./components/Footer";
import AddRecipe from "./components/pages/AddRecipe";
import AddInventory from "./components/pages/AddInventory";
import AddOrder from "./components/pages/AddOrder";
import AdminOrders from "./components/pages/AdminOrders";
import GenerateBill from "./components/pages/GenerateBill";
import ViewBill from  "./components/pages/ViewBill";  
import { useState } from "react";
import { useRef} from "react";
import { login,logout } from "../src/components/pages/firebase";
import { getAuth} from "firebase/auth";



function App() {

  const [ loading, setLoading ] = useState(false);
  // const [userName ,setUserName] =useState("");
  const [loggedIn ,setLoggedIn]=useState("");

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
       localStorage.removeItem("isUser");
      // localStorage.removeItem("userName");

    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  






  return (
    <>
      <Router>
      <Navbar  setLoading={setLoading} 
      handleLogout={()=>handleLogout()} 
      loggedIn={loggedIn} 
      setLoggedIn={setLoggedIn} />
        <><Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Menu" component={Menu} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Login" component={Login} />
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/AddMenu" component={AddMenu} />
          <Route path="/Inventory" component={Inventory} />
          <Route path="/Orders" component={Orders} />
          <Route path="/Menu2" component={Menu2}/>
          <Route path="/newRecipe" component={newRecipe}/>
          <Route path="/AddRecipe" component={AddRecipe}/>
          <Route path="/AddInventory" component={AddInventory}/>
          <Route path="/AddOrder" component={AddOrder}/>
          <Route path="/AdminOrders" component={AdminOrders}/>
          <Route path ="/GenerateBill" component={GenerateBill}/>
          <Route path ="/ViewBill" component={ViewBill}/>
        </Switch>
        </>
       <Footer/>
      </Router>
      
    </>
  );
}

export default App;
