import axios from 'axios';
import { InputText } from 'primereact/inputtext'
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import { TabView, TabPanel } from 'primereact/tabview';
import { Dropdown } from 'primereact/dropdown';
import { Divider } from 'primereact/divider';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import { InputNumber } from 'primereact/inputnumber';
import moment from 'moment';


function Register() {

    const [SiteNamesData, setSiteName] = useState([]);
    const [department_pick, setPick] = useState([])
    const [dailyrate, setdtaily] = useState()
    const [date1,setDate1] = useState([])
    const [date2,setDate2] = useState([])
    const [birthdatedata, setbirthdate] = useState()
    const [loading, setloading] = useState(true)
    const [btndis, setbtn] = useState(false);
    const [statusemployment, setStatusem] = useState([]);
    const [employeestatus, setemployee] = useState([]);
    useEffect(() => {
        axios.get(`/api/SiteNames`).then(res => {
            if (res.data.status === 200) {
                setSiteName(res.data.data);
            }
            setloading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning');
            }
        })

        axios.get(`/api/EmployementStatus`).then(res => {
            if (res.data.status === 200) {
                setemployee(res.data.data);
            }
            setloading(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning');
            }
        })
    }, []);


    const [RegisterEmployee, setEmployee] = useState({
        fname: "",
        mname: "",
        lname: "",
        email: "",
        sss: "",
        tin: "",
        phil: "",
        pag_ibig: "",
        home: "",
        permanent: "",
        age: "",
        marital_status_list: "",
        mobile: "",
        position: "",
        department: "",
        monthly: "",
        suffix: "",
        date_employed: "",
        jobtitle: "",
        dailyrate: "",
        birthdate: "",
        gender: "",
        statusemployment: "",
        error: [],
    });
    const [genderpick, setgender] = useState([]);
    const [marital_status_pick, setmarital] = useState([])
    const [date, setDate] = useState()
    const [activeIndex, setActiveIndex] = useState(0);

    const genderlist = [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
    ];

    const marital_status = [
        { label: "Single", value: "Single" },
        { label: "Married", value: "Married" },
        { label: "Divorce", value: "Divorce" },
        { label: "Widowed", value: "Widowed" },
    ];


    const handleinput = (e) => {
        e.persist();
        setEmployee({ ...RegisterEmployee, [e.target.name]: e.target.value });
    }

    const RegisterAccount = (e) => {
        e.preventDefault();


        setbtn(true)

        const data = {
            fname: RegisterEmployee.fname,
            mname: RegisterEmployee.mname,
            lname: RegisterEmployee.lname,
            suffix: RegisterEmployee.suffix,
            email: RegisterEmployee.email,
            age: RegisterEmployee.age,
            home: RegisterEmployee.home,
            mobile: RegisterEmployee.mobile,
            monthly: RegisterEmployee.monthly,
            pag_ibig: RegisterEmployee.pag_ibig,
            permanent: RegisterEmployee.permanent,
            date_employed: moment(date).format("MMM D YYYY"),
            jobtitle: RegisterEmployee.jobtitle,
            sss: RegisterEmployee.sss,
            tin: RegisterEmployee.tin,
            phil: RegisterEmployee.phil,
            birthdate: moment(birthdatedata).format("MMM D YYYY"),
            department: department_pick,
            marital_status_list: marital_status_pick.site_name,
            gender: genderpick,
            statusemployment: statusemployment,
            user_fk: localStorage.getItem("auth_id"),
        }
        axios.post(`/api/AdminRegister`, data).then(res => {
            if (res.data.status === 200) {
                setTimeout(() => {
                    setbtn(false)
                    swal("Success", res.data.success, 'success');
                    document.getElementById('form_reset').reset();
                    setmarital([])
                    setgender([])
                    setSiteName([])
                    setStatusem([])
                }, 2000);

            }
            else {
                setEmployee({ ...RegisterEmployee, error: res.data.error });
                setbtn(false)
            }
            // setbtn(false)
        }).catch((error) => {
            if (error.response.status === 500) {
                swal("Warning", error.response.statusText, 'warning')
                setbtn(false)
            }
        })
    }




    if (loading) {
        return (
            <Skeleton width="100%" height="2rem" />
        )
    }

    const department_list = SiteNamesData.map((data) => {
        return { label: data.site_name, value: data.site_name }
    })

    const statusem = employeestatus.map((data) => {
        return { label: data.employment_status_name, value: data.id }
    })

    const curr_time = moment(date2).format("h:mm a");
    const end = moment(date1).format('h:mm a');



    return (
        <div>
            <Panel header="Register Employee">
                <div className="container-fluid">
                    <form onSubmit={RegisterAccount} id='form_reset'>
                        <div className="row">
                            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                                <TabPanel header="Personal Information">

                                    <div className="row">
                                        <div className="col-lg-4  col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                First Name<span className='text-danger'>*</span>
                                            </label>
                                            <InputText keyfilter={'alpha'} className='w-100' name='fname' onChange={handleinput} />
                                            <span className='text-danger'>{RegisterEmployee.error.fname}</span>
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Middle Name
                                            </label>
                                            <InputText keyfilter={'alpha'} className='w-100' name='mname' onChange={handleinput} />
                                            {/* <span className='text-danger'>{RegisterEmployee.error.mname}</span> */}
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Last Name<span className='text-danger'>*</span>
                                            </label>
                                            <InputText keyfilter={'alpha'} className='w-100' name='lname' onChange={handleinput} />
                                            <span className='text-danger'>{RegisterEmployee.error.lname}</span>
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Suffix Name<span className='text-danger'>*</span>
                                            </label>
                                            <InputText keyfilter={'alpha'} className='w-100' name='suffix' onChange={handleinput} />
                                            <span className='text-danger'>{RegisterEmployee.error.suffix}</span>
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Marital Status<span className='text-danger'>*</span>
                                            </label>
                                            <Dropdown placeholder='Select Status' required value={marital_status_pick} options={marital_status} onChange={(e) => setmarital(e.target.value)} className='w-100' />
                                            {/* <InputText keyfilter={'alpha'} className='w-100' name='fname' onChange={handleinput} /> */}
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Gender<span className='text-danger'>*</span>
                                            </label>
                                            <Dropdown placeholder=' Select Gender' required value={genderpick} options={genderlist} onChange={(e) => setgender(e.target.value)} className='w-100 p-divider-horizontal'>

                                            </Dropdown>
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Age<span className='text-danger'>*</span>
                                            </label>
                                            <InputText maxLength={2} className='w-100' name='age' onChange={handleinput} keyfilter={'pnum'} />
                                            <span className='text-danger'>{RegisterEmployee.error.age}</span>
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Home Address<span className='text-danger'>*</span>
                                            </label>
                                            <InputText className='w-100' name='home' onChange={handleinput} />
                                            <span className='text-danger'>{RegisterEmployee.error.home}</span>
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Permanent Address<span className='text-danger'>*</span>
                                            </label>
                                            <InputText className='w-100' name='permanent' onChange={handleinput} />
                                            <span className='text-danger'>{RegisterEmployee.error.permanent}</span>
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Birthdate <span className='text-danger'>*</span>
                                            </label>
                                            <Calendar required value={birthdatedata} onChange={(e) => setbirthdate(e.value)} className='w-100'></Calendar>

                                            {/* <Calendar inline value={date} onChange={(e) => setDate(e.value)}></Calendar> */}
                                        </div>
                                        <Divider align="left">
                                            <span className="p-tag">Employement Information</span>
                                        </Divider>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Department<span className='text-danger'>*</span>
                                            </label>
                                            <Dropdown placeholder='Select Department' value={department_pick} className='w-100' options={department_list} onChange={(e) => setPick(e.target.value)} />
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Work Job<span className='text-danger'>*</span>
                                            </label>
                                            <InputText className='w-100' name='jobtitle' onChange={handleinput} />
                                            <span className='text-danger'>{RegisterEmployee.error.jobtitle}</span>
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Employement Status<span className='text-danger'>*</span>
                                            </label>
                                            <Dropdown placeholder='Choose Status' value={statusemployment} className='w-100' options={statusem} onChange={(e) => setStatusem(e.target.value)} />
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Date Employeed<span className='text-danger'>*</span>
                                            </label>
                                            <Calendar required value={date} onChange={(e) => setDate(e.value)} className='w-100'></Calendar>

                                            {/* <Calendar inline value={date} onChange={(e) => setDate(e.value)}></Calendar> */}
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Monthly<span className='text-danger'>*</span>
                                            </label>
                                            {/* <InputNumber className="w-100" name="monthly" rea value={monthly} onValueChange={(e) => setValue(e.value)} /> */}
                                            <InputText className='w-100' keyfilter={'pnum'} name='monthly' onChange={handleinput} />
                                            <span className='text-danger'>{RegisterEmployee.error.monthly}</span>
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Daily Rate
                                            </label>
                                            <InputNumber mode='decimal' id='daily' className='w-100' minFractionDigits={2} disabled readOnly value={RegisterEmployee.monthly === "" ? "" : RegisterEmployee.monthly * 12 / 313} name='daily' />
                                        </div>
                                        <div className="col-lg-4 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Hours Rate
                                            </label>
                                            <InputNumber mode='decimal' className='w-100' minFractionDigits={2} disabled readOnly value={RegisterEmployee.monthly === "" ? "" : RegisterEmployee.monthly * 12 / 313 / 8} name='hours' />
                                        </div>
                                        <Divider>
                                            <span className='p-tag'>
                                                Work Schedule Information
                                            </span>
                                        </Divider>
                                        <div className="row">
                                            <div className="col-lg-3 col-md-12">
                                                <label htmlFor="" className="form-label">
                                                    Start Shift
                                                </label>
                                                <Calendar showTime className='w-100' timeOnly hourFormat="12" value={date1} onChange={(e) => setDate1(e.value)}></Calendar>
                                            </div>
                                            <div className="col-lg-3 col-md-12">
                                                <label htmlFor="" className="form-label">
                                                    End Shift
                                                </label>
                                                <Calendar showTime className='w-100' timeOnly hourFormat="12" value={date2} onChange={(e) => setDate2(e.value)}></Calendar>
                                            </div>
                                            <div className="col-lg-3 col-md-12">
                                                <label htmlFor="" className="form-label">
                                                    Hours Rendered
                                                </label>
                                                <InputText className='w-100' name='hours' disabled readOnly />
                                            </div>
                                        </div>
                                    </div>
                                    <Divider align="left">
                                        <span className="p-tag">Contact Information</span>
                                    </Divider>
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Contact Number<span className='text-danger'>*</span>
                                            </label>
                                            <InputText className='w-100' name="mobile" onChange={handleinput} keyfilter={'pnum'} maxLength={11} />
                                        </div>
                                        <div className="col-lg-3 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Email Address<span className='text-danger'>*</span>
                                            </label>
                                            <InputText className='w-100' name="email" onChange={handleinput} keyfilter={'email'} />
                                        </div>
                                        <div className="col-lg-3 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Emergency Name
                                            </label>
                                            <InputText className='w-100' name='name_guard' onChange={handleinput} keyfilter={'alpha'} />
                                        </div>
                                        <div className="col-lg-3 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Emergency Contact
                                            </label>
                                            <InputText className='w-100' name='contact_guard' onChange={handleinput} keyfilter={'pnum'} maxLength={11} />
                                        </div>
                                    </div>
                                    <Divider align="left">
                                        <span className="p-tag">Government Information</span>
                                    </Divider>
                                    <div className="row">
                                        <div className="col-lg-3 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                SSS Number
                                            </label>
                                            <InputText className='w-100' name='sss' keyfilter={'pnum'} onChange={handleinput} maxLength={11} />
                                        </div>
                                        <div className="col-lg-3 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                TIN Number
                                            </label>
                                            <InputText className='w-100' name='tin' keyfilter={'pnum'} onChange={handleinput} maxLength={11} />
                                        </div>
                                        <div className="col-lg-3 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Phil Health Number
                                            </label>
                                            <InputText className='w-100' name='phil' keyfilter={'pnum'} onChange={handleinput} maxLength={11} />
                                        </div>
                                        <div className="col-lg-3 col-sm-12 mb-1">
                                            <label htmlFor="" className="form-label">
                                                Pag Ibig Number
                                            </label>
                                            <InputText className='w-100' name='pag_ibig' keyfilter={'pnum'} onChange={handleinput} maxLength={11} />
                                        </div>
                                    </div>
                                </TabPanel>
                                {/* <TabPanel header="Contact Information"> */}
                                {/* </TabPanel> */}

                            </TabView>
                            <div className="mt-3">
                                <Button className='p-button-sm p-button-info' disabled={btndis} label='Register Employee' />
                            </div>
                        </div>
                    </form>
                </div>
            </Panel>
        </div>
    )
}

export default Register
