import'../Styles/AdminHomePage.css'
import AddProducts from './AddProducts.jsx'
import Dashboard from './Dashboard.jsx'
import AdminNavBar from './AdminNavBar.jsx'
import { Route,Routes } from 'react-router-dom'
import ViewProduct from './ViewProduct.jsx'
import UpdateProduct from './UpdateProduct.jsx'

function AdminHomePage() {
  return (
    <>
    <AdminNavBar/>
    <Routes>
      <Route path="/add-products" element={<AddProducts/>} />
      <Route path="/" element={<Dashboard/>} />
      <Route path="/viewproduct/:id" element={<ViewProduct/>} />
      <Route path="/updateproduct/:id" element={<UpdateProduct/>} />
    </Routes>
    </>
  )
}

export default AdminHomePage