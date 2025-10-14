import React from 'react'
import { Route,Routes } from 'react-router-dom'
import UserNavBar from './UserNavbar'
import UserDashboard from './UserDashboard'
import UserViewProduct from './UserViewProduct.jsx'
function UserHomePage() {
  return (
    <>
        <UserNavBar/>
        <Routes>
            <Route path='/' element={<UserDashboard/>}></Route>
            <Route path="/userviewproduct/:id" element={<UserViewProduct/>} />
        </Routes>
    </>
  )
}

export default UserHomePage