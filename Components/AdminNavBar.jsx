import { Link } from 'react-router-dom'
import '../Styles/AdminNavBar.css'
import Profile from './Profile.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'

function AdminNavBar() {
    let [data, setdata] = useState("");
    let [items, setItems] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:1001/Products")
            .then((res) => {
                console.log(res.data);
                setItems(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    let isPresent = items.filter((item) => 
        item.Prname.toLowerCase().includes(data.toLowerCase())
    )
    console.log(isPresent);
    return (
        <div className="AdminNavBar">
            <div className="logo">
                <h1>DEEP<span>val</span></h1>
            </div>
            <div className="search">
                <input value={data} onChange={(e) => setdata(e.target.value)} type="text" placeholder='Enter the product you want to purchase in this website' />
                    <button className="btn btn-outline-info">Search</button>
                    <Link to='/admin-homepage/add-products'>Add Product</Link>
            </div>
            <div className="profile">
                <Profile></Profile>
            </div>
        </div>
    )
}

export default AdminNavBar