import { Link } from "react-router-dom";
import '../Styles/LandingPage.css'

function LandingPage() {
  return (
    <div className="LandingPage">
        <Link to="/admin-login">
            <img src="https://cdn.pixabay.com/photo/2016/09/14/08/28/web-1668931_1280.jpg" alt="" />
            <h1>Admin Login</h1>
        </Link>
        <Link to="/user-login">
            <img src="https://cdn.pixabay.com/photo/2024/02/26/14/13/shopping-8598070_1280.jpg" alt="" />
            <h1>User Login</h1>
        </Link>
    </div>
  )
}

export default LandingPage