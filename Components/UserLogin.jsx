import React, { useEffect, useState } from 'react'
import '../Styles/UserLogin.css'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API } from '../src/config/api';

function UserLogin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [accounts, setAccounts] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`${USER_API}/User`)
      .then((res) => setAccounts(res.data))
      .catch((err) => console.log(err))
  }, [])

  let isPresent = accounts.filter((account) =>
    account.email === email && account.password === password
  )

  let navigate = useNavigate();
  function val_login(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (isPresent.length > 0) {
        toast.success("Welcome back!");
        navigate('/user-homepage');
      } else {
        toast.error("Invalid credentials");
        setLoading(false);
      }
    }, 400);
  }

  return (
    <div className="auth-page-wrapper">
      <h1>User Login</h1>
      <div className="userLogin">
        <form onSubmit={val_login}>
          <label htmlFor="user-email">Email</label>
          <input
            id="user-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="user-password">Password</label>
          <input
            id="user-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            required
          />
          <button disabled={loading}>
            {loading ? "Signing in…" : "Login"}
          </button>
          <Link to="/user-signup">Don't have an account? Sign up</Link>
        </form>
      </div>
    </div>
  )
}

export default UserLogin