import React, { useState } from 'react'
import { FaBars, FaBuilding, FaCalculator, FaCalendar, FaCalendarCheck, FaCalendarPlus, FaCaretDown, FaCaretRight, FaClock, FaCogs, FaDatabase, FaDeskpro, FaDesktop, FaDollarSign, FaFolder, FaFolderOpen, FaHeart, FaHome, FaMoneyBill, FaPen, FaPenAlt, FaUserAlt, FaUsers } from 'react-icons/fa'
import { Sidebar } from 'primereact/sidebar'
import img1 from '../../assets/image/itechlogo.png'
import { Avatar } from 'primereact/avatar'
import {FcCalendar, FcOvertime, FcOpenedFolder, FcHome,FcAddDatabase,FcReadingEbook,FcLeave,FcVoicePresentation} from 'react-icons/fc'
import { Redirect, Route, Switch, Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Divider } from 'primereact/divider';
import axios from 'axios';
import EmployeeRoutes from '../../../routes/EmployeeRoutes';

function Employee() {

    const [visible, setVisible] = useState(false);

    const [employeeclick, setEmployee] = useState(false);
    const history = useHistory();

    const Logout = () => {
        axios.post(`/api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_google');
                localStorage.removeItem('auth_id');
                swal('Success', res.data.message, 'success');
                history.push('/login');
            }
        });
    }

    return (
        <>
            {/* <main className='d-flex flex-column min-vh-100'> */}
            <div className='navbar  navbar-expand-lg bg-nav w-100'>
                <div className="container-fluid">
                    <a href="/employee" className="navbar-brand mx-2">
                        <img src={img1} alt="" className='img-responsive' width={120} />
                    </a>
                    <span className='navbar-toggler icon-bars'>
                        <FaBars size={25} className='text-dark' onClick={() => setVisible(true)} />
                    </span>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="" className="nav-link fw-bold mx-4">
                                    My Profile
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link mx-2">

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex me-5 align-items-center d-none  d-lg-block">
                    <button className='border-0 bg-transparent' onClick={Logout} title='Logout'><Avatar icon="pi pi-user" className='p-avatar-circle' size="small" /></button>

                </div>
                <Sidebar className='' position='left' visible={visible} onHide={() => setVisible(false)}>
                    <h2>Sidebar</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Sidebar>
            </div>
            <div className="wrapper">
                <div className="sidebar">
                    <div className="profile">
                        <h3>Kylan Gentry</h3>
                        <p>Admin</p>
                    </div>
                    <Divider />
                    <ul>
                        <li className='mb-3'>
                            <a href="/employee" className='link-item-sidebar'>
                                <FcHome className='me-2 link-item-sidebar' size={17} />
                                <span className='link-item-sidebar sidebar-link mx-3'>Dashboard</span>
                            </a>
                        </li>
                        <li className='mb-3'>
                            <a href="" className='link-item-sidebar' data-bs-target="#settings" data-bs-toggle="collapse">
                                <FcVoicePresentation className='me-2 link-item-sidebar' size={17} />
                                <span className='link-item-sidebar sidebar-link mx-3'>Compose Message <FaCaretDown /></span>
                            </a>
                        </li>
                        <div className="list-form collapse" id='settings'>
                            <li className='mb-3'>
                                <a href="/employee/leave" className='link-item-sidebar'>
                                    <FcLeave className='me-3 link-item-sidebar' size={17} />
                                    <span className='link-item-sidebar sidebar-link mx-1'>Leave Letter</span>
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="/employee/resign" className='link-item-sidebar'>
                                    <FcReadingEbook className='me-3 link-item-sidebar' size={17} />
                                    <span className='link-item-sidebar sidebar-link mx-1'>Resignation Letter</span>
                                </a>
                            </li>
                        </div>
                        <li className='mb-3'>
                            <a href="/employee/calendar" className='link-item-sidebar'>
                                <FcCalendar className='me-2 link-item-sidebar' size={17} />
                                <span className='link-item-sidebar sidebar-link mx-3'>Calendar</span>
                            </a>
                        </li>

                        <li className='mb-3'>
                            <Link to="/employee/logs" className='link-item-sidebar'>
                                <FaDesktop className='me-2 link-item-sidebar' size={17} />
                                <span className='link-item-sidebar sidebar-link mx-3'>Acitivity Logs</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="section">
                <Switch>
                    {
                        EmployeeRoutes.map((route, idx) => {
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

                    <Redirect from="/employee" to="/employee/dashboard" />
                </Switch>
            </div>

            {/* </main> */}
        </>
    )
}

export default Employee
