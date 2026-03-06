import React, { useEffect, useState } from 'react'
import '../Styles/AdminLogin.css'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AUTH_API } from '../src/config/api';

function AdminLogin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [admins, setAdmins] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`${AUTH_API}/Admin`)
      .then((res) => setAdmins(res.data))
      .catch((err) => console.log(err))
  }, [])

  let isPresent = admins.filter((admin) =>
    admin.email === email && admin.password === password
  )

  let navigate = useNavigate();
  function admin_login(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (isPresent.length > 0) {
        toast.success("Login Successful");
        navigate("/admin-homepage");
      } else {
        toast.error("Invalid credentials");
        setLoading(false);
      }
    }, 400);
  }

  return (
    <div className="auth-page-wrapper">
      <h1>Admin Login</h1>
      <div className="adminLogin">
        <form onSubmit={admin_login}>
          <label htmlFor="admin-email">Username</label>
          <input
            id="admin-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            required
          />
          <button disabled={loading}>
            {loading ? "Signing in…" : "Login"}
          </button>
          <Link to="/admin-signup">Don't have an account? Sign up</Link>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin