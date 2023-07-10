import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")




  localStorage.setItem('Name', email)




  const login = (event) => {
    event.preventDefault();
    // alert("log")
    signInWithEmailAndPassword(auth, email, password).then((_) => {
      navigate("/home");
    }).catch((err) => {
      console.log()
      console.log("error", err)
      alert("Invalid Info")
    }

    )
  }





  const register = (event) => {
    event.preventDefault();
    navigate("/signup")
  }






  return (
    <div className='login'>


      <Link to='/'>
        <img id="logo"
          className='login_logo'
          src="https://static01.nyt.com/images/2021/03/03/us/03xp-amazon-logo/oakImage-1614794068335-mobileMasterAt3x.jpg"
          alt="logo" />
      </Link>

      <div className='login_container'>
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autofocus />

          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" className='login_signinbtn' onClick={login}>Sign In</button>

        </form>

        <p>By signing-in you agree to Amazon's Conditions of Use&Sale. Please see our Privacy Noticy,our cookies notice and our internet-based ads notice.</p>



        <button className='login_regbtn' onClick={register} >Create your Amazon Account</button>
      </div>

    </div>
  )
}

export default Login