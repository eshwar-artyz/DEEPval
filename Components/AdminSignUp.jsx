import { useState } from 'react'
import '../Styles/AdminSignUp.css'
import axios from 'axios'
import { toast } from 'react-toastify'

function AdminSignUp() {
    let [admin,setAdmin] = useState({
        U_name : "",
        email : "",
        password : "",
        repassword : "",
        age : "",
        phone : "",
        profile : ""
    })

    function handler(e) {
        let {name,value} = e.target
        setAdmin((prevState)=>({
            ...prevState,
            [name] : value
        }))
    }

    function register_admin(e) {
        e.preventDefault();
        axios.post("http://localhost:1000/Admin",admin)
        .then((res) => {
            console.log(res);
            toast.success("Registered Successful")
        })
        .catch((err)=> {
            console.log(err);
            toast.error("Registration Failed")
        })
    }

    return (
        <div className='AdminSignUp'>
            <form onSubmit={register_admin} action="">
                <label> Name :</label>
                <input type="text" value={admin.U_name} name="U_name" onChange={handler} placeholder='Enter name' required />
                <label> email :</label>
                <input type="text" value={admin.email} name="email" onChange={handler} placeholder='Enter email' required />
                <label> Password :</label>
                <input type="text" value={admin.password} name="password" onChange={handler} placeholder='Enter password' required />
                <label> Re enter Password :</label>
                <input type="text" value={admin.repassword} name="repassword" onChange={handler} placeholder='Re enter password' required />
                <label> Age :</label>
                <input type="text" value={admin.age} name="age" onChange={handler} placeholder='Enter age' required />
                <label> Phone :</label>
                <input type="text" value={admin.phone} name="phone" onChange={handler} placeholder='Enter number' required />
                <label> Profile Image :</label>
                <input type="text" value={admin.profile} name="profile" onChange={handler} placeholder='Enter image url' required />
                <button>Register User</button>
            </form>
        </div>
    )
}

export default AdminSignUp