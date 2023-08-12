import { InputText } from 'primereact/inputtext'
import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import axios from 'axios';
import swal from 'sweetalert'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";

function Login() {


    const [LoginData, setData] = useState({
        email: "",
        password: "",
        error: [],
    });
    const history = useHistory();

    const clientId = "412304294703-02o2nablkflhb4m1tql39br8ja2588ts.apps.googleusercontent.com";

    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId });
        })
    }, []);

    const responseGoogle = (response) => {
        const data = {
            firstname: response.profileObj.givenName,
            lastname: response.profileObj.familyName,
            email: response.profileObj.email,
            ID: response.profileObj.googleId,
        }

        // console.log(data);

        axios.post(`/api/LoginAuthentication`, data).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.success, 'success');
                localStorage.setItem("auth_token", res.data.token);
                localStorage.setItem("auth_id", res.data.id);
                localStorage.setItem("auth_google", res.data.googleID)
                history.push('/admin');
            }
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning');
            }
        })
    }

    const handleinput = (e) => {
        e.persist();
        setData({ ...LoginData, [e.target.name]: e.target.value });
    }

    const LoginForm = (e) => {
        e.preventDefault();

        const data = {
            email: LoginData.email,
            password: LoginData.password,
        };


        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/LoginData`, data).then(res => {
                if (res.data.status === 200) {
                    swal("Success", res.data.success, 'success');
                    localStorage.setItem("auth_token", res.data.token);
                    localStorage.setItem("auth_id", res.data.id);
                    history.push('/admin');
                }
                else if (res.data.status === 401) {
                    swal("Warning", res.data.error, 'warning');

                }
                else {
                    setData({ ...LoginData, error: res.data.error });
                }
            }).catch((error) => {
                if (error.response.status === 500) {
                    swal("Warning", error.response.statusText, 'warning');
                    document.getElementById("formlog").reset();
                }
                else if (res.data.status === 401) {
                    swal("Warning", res.data.errro, 'warning');

                }
                else if (error.response.status === 404) {
                    swal("Error", "Page Not Found", 'error');
                    document.getElementById("formlog").reset();
                }
            });
        });
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <form onSubmit={LoginForm} id="formlog">
                        <div className="col-lg-12 mb-2">
                            <label htmlFor="" className="form-label">
                                Username
                            </label>
                            <InputText className='w-100' name='email' onChange={handleinput} />
                            <span className='text-danger'>{LoginData.error.email}</span>
                        </div>
                        <div className="col-lg-12 mb-2">
                            <label htmlFor="" className="form-label">
                                Password
                            </label>
                            <InputText type='password' className='w-100' name='password' onChange={handleinput} />
                            <span className='text-danger'>{LoginData.error.password}</span>
                        </div>
                        <div className="mt-2">
                            <Button className='w-100 p-button-info p-button-sm' label='Login' />
                        </div>
                        <Divider align='center'>
                            <span className=''><em>Login with</em></span>
                        </Divider>
                    </form>
                    <div className="col-lg-12">
                        <GoogleLogin
                            clientId={clientId}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            theme="light"
                            render={renderProps => (
                                <Button className='p-button-danger p-button-sm w-100 p-button-icon' label='Login with Google' onClick={renderProps.onClick} disabled={renderProps.disabled}></Button>
                            )}
                            cookiePolicy={'single_host_origin'} />
                        {/* <Button className='p-button-sm w-100' label='Login with Google' /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
