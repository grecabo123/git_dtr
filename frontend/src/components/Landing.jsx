import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import img1 from '../assets/image/itechlogo.png'
import { Link, Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import PublicRoutes from '../../routes/PublicRoutes';
import Footer from './Footer';
import { Dialog } from 'primereact/dialog';
import Login from './Login';
import { Button } from 'primereact/button';
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from 'html5-qrcode'



function Landing() {

    const [scanResult, setScan] = useState(null);

    useEffect(() => {

        function onScanSuccess(decodedText, decodedResult) {
            // Handle the scanned code as you like, for example:
            console.log(`Code matched = ${decodedText}`, decodedResult);
        }

        const formatsToSupport = [
            Html5QrcodeSupportedFormats.QR_CODE,
            Html5QrcodeSupportedFormats.UPC_A,
            Html5QrcodeSupportedFormats.UPC_E,
            Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION,

        ];

        const html5QrcodeScanner = new Html5QrcodeScanner(
            "reader",
            {
                fps: 10,
                qrbox: { width: 250, height: 250 },
                formatsToSupport: formatsToSupport
            },
            /* verbose= */ false);
        html5QrcodeScanner.render(onScanSuccess);

    }, []);

    const [UserData, setUserdata] = useState({
        name: "",
    });



    const [value, setValue] = useState()
    const [phil, setphil] = useState();
    const [visible, setVisible] = useState(false);

    const handleinout = (e) => {
        e.persist()
        setUserdata({ ...UserData, [e.target.name]: e.target.value })
    }

    const Register = (e) => {
        e.preventDefault();

        const data = {
            name: UserData.name,
        };

        axios.post(`/api/RegisterData`, data).then(res => {
            if (res.data.status === 200) {

            }
        }).catch((error) => {
            if (error.response.status === 500) {

            }
        })
    }
    const onHide = () => {
        setVisible(false)
    }

    return (
        <>
            <div className='d-flex flex-column min-vh-100'>
                <div className="navbar navbar-expand-lg border-nav bg-white px-4">
                    <div className="container-fluid">
                        <a href="" className="navbar-brand">
                            <img src={img1} alt="" className='img-responsive' />
                        </a>
                        <span className='navbar-toggler' data-bs-target="#navb" data-bs-toggle="collapse">
                            <FaBars className='text-dark button' />
                        </span>
                    </div>
                    <div className="collapse navbar-collapse" id='navb'>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mt-2">
                                <button onClick={() => setVisible(true)} className='nav-link active mx-3 fw-bold'>Login</button>

                            </li>
                            {/* <li className="nav-item ms-auto">
                               <Link to="/register" className="nav-link mx-3">Register</Link>

                            </li> */}
                        </ul>
                    </div>
                </div>
                {/* <Skeleton width="100%" height="2rem" className='p-skeleton' /> */}
                <div className='jumbotron bg-img  text-center text-light py-5'>
                    <div className="mask">
                        <div className="h-100">
                            <h4>TITLE</h4>
                            <span>From clock-in to clock-out, our All-in-One Employee DTR keeps your business running smoothly anytime, anywhere.</span>
                        </div>
                    </div>
                </div>

                {
                    scanResult ? <span>Success</span> : <div id="reader">

                    </div>
                }



                {/* <InputText value={value} keyfilter={'num'} onChange={(e) => setValue(e.target.value)} />
                <ul>
                    <li><span>Monthly: {value}</span></li>
                    <li><span>Pag ibig: {value !== ""  ? '' : value - 100}</span></li>
                    <li><span>SSS: {value >= 19750 ? value - 900 : ''}</span></li>
                    <li><span>Philhealth: {value * 0.04}</span></li>
                    <li><span>Withholding tax: {value > 33332 ? (value - 33333) * 0.2 + 1875 : '' }</span></li>
                </ul>

                <ul>
                    <li><span>Daily rate: {
                            value / 26
                        }</span></li>
                        <li><span>Hourly: {value / 26 / 8}</span></li>
                </ul>

                <InputText value={value} keyfilter={'num'} onChange={(e) => setValue(e.target.value)} /> */}
                <Switch>
                    {
                        PublicRoutes.map((route, idx) => {
                            return (
                                route.component && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={(props) => <route.component {...props} />}
                                    />
                                )
                            )
                        })
                    }
                    <Redirect from="/" to="/index" />
                </Switch>



                <Footer />


                <Dialog header="Login" visible={visible} position='top' onHide={onHide} draggable={false} breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '30vw' }}>
                    <Login />
                </Dialog>



            </div>
        </>
    )
}

export default Landing
