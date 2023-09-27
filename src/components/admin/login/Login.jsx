import React, { useState } from "react"
import "./login.css"
import { useFirebaseAuth } from "../../../firebase/firebase"
import { useNavigate } from "react-router-dom"

function Login() {
  const { user, login } = useFirebaseAuth();
  const [details, setDetails] = useState({email:"", password: ""});
  const [error, setError] = useState("");
  const navigate = useNavigate();


   function handleSubmit(e) {
    e.preventDefault();
        if (details.email != "" && details.password != "") {
      login(details.email, details.password)
      .then(() => {
        navigate('/admin');
      })
      .catch(err => {
       setError(err.message);
       console.log(error.message);
      })
    }
  }


  function handleChange(e) {
    const {id, value} = e.target;
    if(id == "username") {
      setDetails(prev => {
        return {
          ...prev,
          email: value
        }
      })
    } else {
      setDetails(prev => {
        return {
          ...prev,
          password: value
        }
      })
    }
  }
    return (
        <div className="login-form center">
        <div className="login">
    <form id="main" onSubmit={handleSubmit}>
        <h2>Login to your account</h2>
    
        <div className="input-parent">
          <label htmlFor="username">Email</label>
          <input type="text" id="username" onChange={handleChange} />
        </div>
    
        <div className="input-parent">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
    
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
</div>
    )
}

export default Login 