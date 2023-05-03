import React from "react"
import "./login.css"
import { useState, useContext } from "react";
import { AuthContext }   from  "../../components/Contexts";
// import { useNavigate } from "react-router-dom";

export const Login = () => {
  // const nav = useNavigate();

  const { setIsLoggedIn } = useContext(AuthContext);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const userAuthentication = () => {
    if (
      (user.name === "users" && user.password === "123456") ||
      (user.name === "admin" && user.password === "admin@123")
    ) {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
      setIsLoggedIn(true);
      alert("Logged in successfully");
    // nav('/')

    } else {
      alert("You have enter incurrect email or password");
    }
  };
  
  return (
    <>
      <section className='login'>
        <div className='container'>

          <form>
            <span>Username or email address *</span>
            <input type='text' required 
             onChange={(e) => {
              setUser({...user,name: e.target.value});
            }}      
            />
            <span>Password *</span>
            <input type='password' required 
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            />
            <button className='button' onClick={userAuthentication}>Log in</button>
          </form>
        </div>
      </section>
    </>
  )
}
