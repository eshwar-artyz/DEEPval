import { Link } from 'react-router-dom'
import '../Styles/UserNavBar.css'
import Profile from './Profile.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { PRODUCT_API } from '../src/config/api'

function UserNavBar() {
    let [data, setData] = useState("");
    let [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`${PRODUCT_API}/Products`)
            .then((res) => setItems(res.data))
            .catch((err) => console.log(err))
    }, [])

    let isPresent = items.filter((item) =>
        item.Prname.toLowerCase().includes(data.toLowerCase())
    )

    return (
        <div className="AdminNavBar">
            <div className="logo">
                <h1>DEEP<span>val</span></h1>
            </div>
            <div className="search">
                <input
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    type="text"
                    placeholder="Search for products…"
                />
                <button className="btn btn-outline-info">Search</button>
                {/* BUG FIX: was '/admin-homepage/addtocart', corrected to user route */}
                <Link to='/user-homepage/cart'>
                    Cart ({isPresent.length > 0 && data ? isPresent.length : 0})
                </Link>
            </div>
            <div className="profile">
                <Profile />
            </div>
        </div>
    )
}

export default UserNavBar