import axios from 'axios';
import React, { useState } from 'react'
import swal from 'sweetalert';

function Register() {

    const [RegisterData, setRegister] = useState({
        email: "",
        password: "",
    });

    const handleinput = (e) => {
        e.persist();
        setRegister({...RegisterData, [e.target.name]: e.target.value})
    }

    const RegisterAccount = (e) => {
        e.preventDefault();

        const data = {
            email: RegisterData.email,
            password: RegisterData.password,
        };

        axios.post(`/api/Register`,data).then(res => {
            if(res.data.status === 200){
                swal("Success",res.data.success,'success');
            }
        }).catch((error) => {
            if(error.response.status === 500){
                swal("Warning",error.response.statusText,'warning');
            }
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <form onSubmit={RegisterAccount}>
                        <input type="text" name='email'  onChange={handleinput}/>
                        <input type="password" name='password' onChange={handleinput} />
                        <button>Regis</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
