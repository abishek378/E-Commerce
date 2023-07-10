import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebase"
// import { auth, fetchSignInMethodsForEmail, createUserWithEmailAndPassword } from '../../firebase';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const register = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      setConfirmPassword('');
      document.getElementById('cpass').focus();
      return;
    }

    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods && methods.length > 0) {
        alert('User already exists');
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        document.getElementById("email").focus()
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (userCredential) {
        console.log('User Account Created', userCredential);
        alert('User Account Created');
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      alert('Failed to create user account');
    }
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          id='logo'
          className='login_logo'
          src='https://static01.nyt.com/images/2021/03/03/us/03xp-amazon-logo/oakImage-1614794068335-mobileMasterAt3x.jpg'
          alt='logo'
        />
      </Link>
      <div className='login_container'>
        <h1>Sign Up</h1>
        <form onSubmit={register}>
          <h5>User Name</h5>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            required
          />
          <h5>E-mail</h5>
          <input
          id="email"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <h5>Confirm Password</h5>
          <input
            id='cpass'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type='submit' className='login_signinbtn'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
