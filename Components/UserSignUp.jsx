import { useState } from 'react'
import '../Styles/UserSignUp.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { USER_API } from '../src/config/api';

function UserSignUp() {
    let [user,setUser] = useState({
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
        setUser((prevState)=>({
            ...prevState,
            [name] : value
        }))
    }

    function register_user(e) {
        e.preventDefault();
        axios.post(`${USER_API}/User`, user)
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
        <div className='UserSignUp'>
            <form onSubmit={register_user} action="">
                <label> Name :</label>
                <input type="text" value={user.U_name} name="U_name" onChange={handler} placeholder='Enter name' required />
                <label> email :</label>
                <input type="text" value={user.email} name="email" onChange={handler} placeholder='Enter email' required />
                <label> Password :</label>
                <input type="text" value={user.password} name="password" onChange={handler} placeholder='Enter password' required />
                <label> Re enter Password :</label>
                <input type="text" value={user.repassword} name="repassword" onChange={handler} placeholder='Re enter password' required />
                <label> Age :</label>
                <input type="text" value={user.age} name="age" onChange={handler} placeholder='Enter age' required />
                <label> Phone :</label>
                <input type="text" value={user.phone} name="phone" onChange={handler} placeholder='Enter number' required />
                <label> Profile Image :</label>
                <input type="text" value={user.profile} name="profile" onChange={handler} placeholder='Enter image url' required />
                <button>Register User</button>
            </form>
        </div>
    )
}

export default UserSignUp