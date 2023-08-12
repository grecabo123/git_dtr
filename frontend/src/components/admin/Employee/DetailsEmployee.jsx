import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import { Skeleton } from 'primereact/skeleton';
import React, { useEffect, useState } from 'react'
import { Divider } from 'primereact/divider'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FcPrevious } from 'react-icons/fc'
import { Dialog } from 'primereact/dialog';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import QRCode from "qrcode.react";


function DetailsEmployee(props) {

    const history = useHistory();
    const [EmployeeDetails, setDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const data = {
            id: props.match.params.id,
        }
        axios.get(`/api/EmployeeDetails/${data.id}`).then(res => {
            if (res.data.status === 200) {
                setDetails(res.data.data)
            }

            else {
                history.push('/admin/list')
            }
            setLoading(false);
        }).catch((error) => {
            if (error.response.status === 500) {

            }
        })
    }, []);

    const downloadQR = () => {
        const canvas = document.getElementById(EmployeeDetails.id);
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = EmployeeDetails.name+".png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    const items = [
        // {
        //     label: 'Edit',
        //     icon: 'pi pi-fw pi-pencil',
        // },
        {
            label: 'Time Check',
            icon: 'pi pi-fw pi-clock',
            url: `/admin/employee/time/refid=${props.match.params.id}`,
        },
        {
            label: 'Return Page',
            icon: 'pi pi-fw pi-angle-left',
            url: "/admin/list"
        },

    ];

    const template = <Menubar model={items} />

    const onHide = () => {
        setVisible(false)
    }



    if (loading) {
        return (
            <Panel header="Employee Details" className=''>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-5">
                            <Skeleton width='100%' borderRadius='10px' />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-5">
                            <Skeleton width='100%' borderRadius='10px' />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-5">
                            <Skeleton width='100%' borderRadius='10px' />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-5">
                            <Skeleton width='100%' borderRadius='10px' />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-5">
                            <Skeleton width='100%' borderRadius='10px' />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-5">
                            <Skeleton width='100%' borderRadius='10px' />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-5">
                            <Skeleton width='100%' borderRadius='10px' />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-5">
                            <Skeleton width='100%' borderRadius='10px' />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-5">
                            <Skeleton width='100%' borderRadius='10px' />
                        </div>
                    </div>
                </div>
            </Panel>
        )
    }

    return (
        <div>
            <Panel headerTemplate={template}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 mb-2">
                            <label htmlFor="" className="form-label">
                                Name
                            </label>
                            <InputText className='w-100' name='name' value={EmployeeDetails.name} />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-2">
                            <label htmlFor="" className="form-label">
                                Suffix
                            </label>
                            <InputText className='w-100' name='name' value={EmployeeDetails.suffix} />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-2">
                            <label htmlFor="" className="form-label">
                                Marital Status
                            </label>
                            <InputText className='w-100' name='name' value={EmployeeDetails.marital_status} />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-2">
                            <label htmlFor="" className="form-label">
                                Age
                            </label>
                            <InputText className='w-100' name='name' value={EmployeeDetails.age} />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-2">
                            <label htmlFor="" className="form-label">
                                Home Address
                            </label>
                            <InputText className='w-100' name='name' value={EmployeeDetails.current_adr} />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-2">
                            <label htmlFor="" className="form-label">
                                Permanent Address
                            </label>
                            <InputText className='w-100' name='name' value={EmployeeDetails.perma_adr} />
                        </div>
                        <div className="col-lg-4 col-md-12 mb-2">
                            <label htmlFor="" className="form-label">
                                Birthdate
                            </label>
                            {/* <Calendar value={EmployeeDetails.birthday}  className='w-100'></Calendar> */}
                            <InputText className='w-100' name='name' value={EmployeeDetails.birthday} />
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <label htmlFor="" className="form-label">
                                QR Code
                            </label>
                            <Button className='w-100 p-button-info p-button-sm' onClick={() => setVisible(true)} label='View' />
                        </div>
                    </div>

                    <Dialog header={`QR CODE - ${EmployeeDetails.name}`} visible={visible} onHide={onHide} draggable={false} resizable={false} breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '25vw' }}>
                        <div className="container-fluid">
                            <div className="card p-3">
                                <div className="row justify-content-center">
                                    <QRCode
                                        id={EmployeeDetails.id}
                                        value={`${EmployeeDetails.id}`}
                                        size={300}
                                        level={"H"}
                                        includeMargin={true}
                                    />
                                    <Button onClick={downloadQR}> Download QR </Button>
                                </div>
                            </div>
                            <div className="mt-3">
                                <p><b className='text-info'>NOTE:</b> <small> Scan this QR Code for your attendance.</small></p>
                            </div>
                        </div>
                    </Dialog>
                    <Divider>
                        <span className='p-tag'>
                            Employement Information
                        </span>
                    </Divider>
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <label htmlFor="" className="form-label">
                                Department
                            </label>
                            <InputText className='w-100' name='department' value={EmployeeDetails.department} />
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <label htmlFor="" className="form-label">
                                Work Job
                            </label>
                            <InputText className='w-100' name='position' value={EmployeeDetails.position} />
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <label htmlFor="" className="form-label">
                                Date Employed
                            </label>
                            <InputText className='w-100' name='date_hired' value={EmployeeDetails.date_hired} />
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <label htmlFor="" className="form-label">
                                Monthly
                            </label>
                            <InputText className='w-100' name='Monthly' value={EmployeeDetails.Monthly} />
                        </div>
                    </div>
                    <Divider>
                        <span className='p-tag'>
                            Contact Information
                        </span>
                    </Divider>
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <label htmlFor="" className="form-label">
                                Contact Number
                            </label>
                            <InputText className='w-100' name='contact' value={EmployeeDetails.contact_number} />
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <label htmlFor="" className="form-label">
                                Email Address
                            </label>
                            <InputText className='w-100' name='email' value={EmployeeDetails.email} />
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <label htmlFor="" className="form-label">
                                Emergency Name
                            </label>
                            <InputText className='w-100' name='emergency' />
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <label htmlFor="" className="form-label">
                                Emergency Contact
                            </label>
                            <InputText className='w-100' />
                        </div>
                    </div>
                    <Divider>
                        <span className='p-tag'>
                            Government Information
                        </span>
                    </Divider>
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <label htmlFor="" className="form-label">
                                SSS Number
                            </label>
                            <InputText className='w-100' name='SSS' value={EmployeeDetails.SSS} />
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <label htmlFor="" className="form-label">
                                TIN Number
                            </label>
                            <InputText className='w-100' name='TIN' value={EmployeeDetails.TIN} />
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <label htmlFor="" className="form-label">
                                Pag Ibig Number
                            </label>
                            <InputText className='w-100' name='Pagibig' value={EmployeeDetails.Pagibig} />
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <label htmlFor="" className="form-label">
                                Philhealth Number
                            </label>
                            <InputText className='w-100' name='Philhleath' value={EmployeeDetails.Philhealth} />
                        </div>

                    </div>

                </div>
            </Panel>
        </div>
    )
}

export default DetailsEmployee
