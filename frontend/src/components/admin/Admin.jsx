import { Button } from 'primereact/button';
import React, { useState } from 'react'
import { FaBars, FaBuilding, FaCalculator, FaCalendar, FaCalendarCheck, FaCalendarPlus, FaCaretDown, FaCaretRight, FaClock, FaCogs, FaDatabase, FaDeskpro, FaDesktop, FaDollarSign, FaFolder, FaFolderOpen, FaHeart, FaHome, FaMoneyBill, FaPen, FaPenAlt, FaUserAlt, FaUsers } from 'react-icons/fa'
import { Sidebar } from 'primereact/sidebar'
import img1 from '../../assets/image/itechlogo.png'
import { Avatar } from 'primereact/avatar'
import {FcCalendar, FcOvertime, FcOpenedFolder, FcHome,FcAddDatabase,FcSupport,FcManager} from 'react-icons/fc'
import { Redirect, Route, Switch, Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AdminRoutes from '../../../routes/AdminRoutes';
import { Divider } from 'primereact/divider';
import axios from 'axios';

function Admin() {

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
                    <a href="/admin" className="navbar-brand mx-2">
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
                            <a href="/admin" className='link-item-sidebar'>
                                <FcHome className='me-2 link-item-sidebar' size={17} />
                                <span className='link-item-sidebar sidebar-link mx-3'>Dashboard</span>
                            </a>
                        </li>

                        {/* Employee */}
                        <li className='mb-3'>
                            <a href="" className='link-item-sidebar' data-bs-target="#nav_list" data-bs-toggle="collapse">
                                <FcManager className='me-2 link-item-sidebar' size={17} />
                                <span className='link-item-sidebar sidebar-link mx-3'>Employee <FaCaretDown /></span>
                            </a>
                        </li>

                        <div className="list-form collapse" id='nav_list'>
                            <li className='mb-3'>
                                <a href="/admin/register" className='link-item-sidebar'>
                                    <FaPen className='me-3 link-item-sidebar' size={17} />
                                    <span className='link-item-sidebar sidebar-link mx-1'>Register Employee</span>
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="/admin/list" className='link-item-sidebar'>
                                    <FaUserAlt className='me-3 link-item-sidebar' size={17} />
                                    <span className='link-item-sidebar sidebar-link mx-1'>Employee List</span>
                                </a>
                            </li>
                        </div>
                        {/* emd of employee */}

                        <li className='mb-3'>
                            <a href="" className='link-item-sidebar' data-bs-target="#DTR" data-bs-toggle="collapse">
                                <FcOpenedFolder className='me-2 link-item-sidebar' size={17} />
                                <span className='link-item-sidebar sidebar-link mx-3'>DTR <FaCaretDown /></span>
                            </a>
                        </li>

                        {/* DTR */}
                        <div className="list-form collapse" id='DTR'>
                            <li className='mb-3'>
                                <a href="/admin" className='link-item-sidebar'>
                                    <FaPen className='me-3 link-item-sidebar' size={17} />
                                    <span className='link-item-sidebar sidebar-link mx-1'>Payroll</span>
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="/admin" className='link-item-sidebar'>
                                    <FaCalculator className='me-3 link-item-sidebar' size={17} />
                                    <span className='link-item-sidebar sidebar-link mx-1'>Compute DTR</span>
                                </a>
                            </li>
                        </div>

                        {/* end of DTR */}


                        {/* Tax */}
                        <li className='mb-3'>
                            <a href="" className='link-item-sidebar' data-bs-target="#tax" data-bs-toggle="collapse">
                                <FaDollarSign className='me-2 link-item-sidebar' size={17} />
                                <span className='link-item-sidebar sidebar-link mx-3'>Tax <FaCaretDown /></span>
                            </a>
                        </li>
                        <div className="list-form collapse" id='tax'>
                            <li className='mb-3'>
                                <a href="/admin/SSS" className='link-item-sidebar'>
                                    <FaMoneyBill className='me-3 link-item-sidebar' size={17} />
                                    <span className='link-item-sidebar sidebar-link mx-1'>SSS</span>
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="/admin/philhealth" className='link-item-sidebar'>
                                    <FaHeart className='me-3 link-item-sidebar' size={17} />
                                    <span className='link-item-sidebar sidebar-link mx-1'>Philhealth</span>
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="/admin/TIN" className='link-item-sidebar'>
                                    <FaPen className='me-3 link-item-sidebar' size={17} />
                                    <span className='link-item-sidebar sidebar-link mx-1'>TIN</span>
                                </a>
                            </li>
                        </div>
                        {/* End of taxes */}

                        <li className='mb-3'>
                            <a href="" className='link-item-sidebar' data-bs-target="#settings" data-bs-toggle="collapse">
                                <FcSupport className='me-2 link-item-sidebar' size={17} />
                                <span className='link-item-sidebar sidebar-link mx-3'>Settings <FaCaretDown /></span>
                            </a>
                        </li>

                        <div className="list-form collapse" id='settings'>
                            <li className='mb-3'>
                                <a href="/admin/total" className='link-item-sidebar'>
                                    <FaCalendarPlus className='me-3 link-item-sidebar' size={17} />
                                    <span className='link-item-sidebar sidebar-link mx-1'>Total Days</span>
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="/admin/SSS" className='link-item-sidebar'>
                                    <FaBuilding className='me-3 link-item-sidebar' size={17} />
                                    <span className='link-item-sidebar sidebar-link mx-1'>Register Department</span>
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="/admin/SSS" className='link-item-sidebar'>
                                    <FaDollarSign className='me-3 link-item-sidebar' size={17} />
                                    <span className='link-item-sidebar sidebar-link mx-1'>SSS Data</span>
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="/admin/SSS" className='link-item-sidebar'>
                                    <FaDollarSign className='me-3 link-item-sidebar' size={17} />
                                    <span className='link-item-sidebar sidebar-link mx-1'>TIN Data</span>
                                </a>
                            </li>


                        </div>

                        <li className='mb-3'>
                            <a href="/admin" className='link-item-sidebar'>
                                <FcCalendar className='me-2 link-item-sidebar' size={17} />
                                <span className='link-item-sidebar sidebar-link mx-3'>Calendar</span>
                            </a>
                        </li>
                        <li className='mb-3'>
                            <a href="/admin" className='link-item-sidebar'>
                                <FcOvertime className='me-2 link-item-sidebar' size={17} />
                                <span className='link-item-sidebar sidebar-link mx-3'>Monitor Time</span>
                            </a>
                        </li>
                        <li className='mb-3'>
                            <a href="/admin" className='link-item-sidebar'>
                                <FcAddDatabase className='me-2 link-item-sidebar' size={17} />
                                <span className='link-item-sidebar sidebar-link mx-3'>Backup Database</span>
                            </a>
                        </li>
                        <li className='mb-3'>
                            <Link to="/admin/logs" className='link-item-sidebar'>
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
                        AdminRoutes.map((route, idx) => {
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

                    <Redirect from="/admin" to="/admin/dashboard" />
                </Switch>
            </div>

            {/* </main> */}
        </>
    )
}

export default Admin
