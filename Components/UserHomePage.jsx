import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UserNavBar from './UserNavbar'
import UserDashboard from './UserDashboard'
import UserViewProduct from './UserViewProduct.jsx'
import Cart from './Cart.jsx'
import { useLocation } from 'react-router-dom'

function UserHomePage() {
  let location = useLocation();
  console.log(location.state);
  return (
    <>
        <UserNavBar/>
        <Routes>
            <Route path='/' element={<UserDashboard userData={location.state}/>}></Route>
            <Route path="/userviewproduct/:id" element={<UserViewProduct/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    </>
  )
}

export default UserHomePage