import { Link } from 'react-router-dom'
import '../Styles/UserNavBar.css'
import Profile from './Profile.jsx'

function UserNavBar() {
    return (
        <div className="AdminNavBar">
            <div className="logo">
                <h1>DEEP<span>val</span></h1>
            </div>
            <div className="search">
                <input type="text" placeholder='Enter the product you want to purchase in this website' />
                <button className="btn btn-outline-info">Search</button>
                <Link to='/admin-homepage/addtocart'>Add to cart</Link>
            </div>
            <div className="profile">
                <Profile></Profile>
            </div>
        </div>
    )
}

export default UserNavBar