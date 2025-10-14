import { BrowserRouter,Routes,Route } from "react-router-dom";
import AdminLogin from '../Components/AdminLogin';
import UserLogin from '../Components/UserLogin';
import LandingPage from '../Components/LandingPage';
import { ToastContainer } from "react-toastify";
import AdminSignUp from '../Components/AdminSignUp';
import UserSignUp from '../Components/UserSignUp';
import AdminHomePage from '../Components/AdminHomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from "../Components/ErrorPage";
import UserHomePage from "../Components/UserHomePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/*' element={<ErrorPage/>}/>
      <Route path='/admin-login' element={<AdminLogin/>}/>
      <Route path='/user-login' element={<UserLogin/>}/>
      <Route path='/admin-signup' element={<AdminSignUp/>}/>
      <Route path='/user-signup' element={<UserSignUp/>}/>
      <Route path='/admin-homepage/*' element={<AdminHomePage/>}/>
      <Route path='/user-homepage/*' element={<UserHomePage/>}/>
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
  )
}

export default App