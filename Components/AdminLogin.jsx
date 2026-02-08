import React, { useEffect, useState } from 'react'
import '../Styles/AdminLogin.css'
import {toast} from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AUTH_API } from '../src/config/api';

function AdminLogin() {
  let[email,setEmail] = useState("");
  let[password,setPassword] = useState("");
  let[admins,setAdmins] = useState([]);

  useEffect(()=>{
   axios.get(`${AUTH_API}/Admin`)
    .then((res)=>{
      console.log(res.data);
      setAdmins(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  let isPresent = admins.filter((admin)=>{
    return admin.email == email && admin.password == password;
  })

  let navigate = useNavigate();
  function admin_login(e) {
    e.preventDefault();
    if(isPresent.length>0) {
      toast.success("Login Successful")
      navigate("/admin-homepage")
    }
    else {
      toast.error("Login failed");
    }
  }

  return (
    <>
    <h1> ADMIN LOGIN</h1>
    <div className="adminLogin">
      <form onSubmit={admin_login} action="">
      <label htmlFor="">Username : </label>
      <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Enter email' />
      <label htmlFor="">Password : </label>
      <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Enter password' />
      <button>Login</button>
      <Link to="/admin-signup">New user</Link>
    </form>
    </div>
    </>
  )
}

export default AdminLogin