import React, { useEffect, useState } from 'react'
import '../Styles/UserLogin.css'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserLogin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [accounts, setaccounts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1002/User")
      .then((res) => {
        setaccounts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  },[])

  let isPresent = accounts.filter((account)=>{
    return account.email == email && account.password == password;
  })

  let navigate = useNavigate();
  function val_login(e) {
    e.preventDefault();
    if (isPresent.length>0) {
      toast.success("Login Successful")
      navigate('/user-homepage')
    }
    else {
      toast.error("Login Failed")
    }
  }

  return (
    <>
      <h1> USER LOGIN</h1>
      <div className="userLogin">
        <form onSubmit={val_login} action="">
          <label htmlFor="">Username : </label>
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder='Enter email' />
          <label htmlFor="">Password : </label>
          <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Enter password' />
          <button>Login</button>
          <Link to="/user-signup">New user</Link>
        </form>
      </div>
    </>
  )
}

export default UserLogin