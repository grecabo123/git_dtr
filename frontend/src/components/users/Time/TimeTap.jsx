import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button'
import moment from 'moment'
import axios from 'axios';
import swal from 'sweetalert';
import { Skeleton } from 'primereact/skeleton';

function TimeTap() {

    const [getstatus, setStatus] = useState([])
    const [loading, setLoading] = useState(true);
    const [timeindis, settimedis] = useState(false);

    useEffect(() => {
        const id = localStorage.getItem('auth_id');
        axios.get(`/api/GetCurrentDate/${id}`).then(res => {
            if(res.data.status === 200){
                setStatus(res.data.data);
            }
            setLoading(false)
        }).catch((error) => {
            if(error.response.status === 500){
                swal("Warning",error.response.statusText,'warning');
            }
        })
    },[]);

    const TimeIn = () => {


        const data = {
            current_: moment().format(),
            id: localStorage.getItem('auth_id'),
            current_time_id: getstatus.id,
        }
        axios.post(`/api/TimeIn`,data).then(res => {
            if(res.data.status === 200){
                swal("Success",res.data.data,'success');
                localStorage.setItem("auth_time_id",res.data.time_id);
                setTimeout(() => {
                    window.location.reload();
                },2000)
            }
        }).catch((error) => {
            if(error.response.status === 500){
                swal("Warning",error.response.statusText,'warning');
            }
        })
    }

    if(loading){
        return (
            <Skeleton width='100%' borderRadius='20px' />
        )
    }

    const TimeOut = (e) => {


        const data = {
            time_id: e.target.value,
            current_: moment().format(),
            id: localStorage.getItem('auth_id'),
            current_time_id:  getstatus.id,
        }

        axios.put(`/api/TimeOut`,data).then(res => {
            if(res.data.status === 200){
                swal("Success",res.data.data,'success');
                setTimeout(() => {
                    window.location.reload();
                },2000)
            }
        }).catch((error) => {
            if(error.response.status === 500){
                swal("Warning",error.response.statusText,'warning');
            }
        })
    }



    return (
        <div>
            <div className="p-2">
                {
                    moment(getstatus.created_at).format('MMM DD YYYY') === moment().format('MMM DD YYYY') ?
                        <div>
                            <Button className='p-button-sm p-button-info me-3' label='Time In' disabled />
                            <Button className='p-button-sm p-button-danger me-3' label='Time Out' disabled />
                        </div>
                    :
                    <div>
                         <Button className='p-button-info p-button-sm me-3' disabled={getstatus === null ? false : getstatus.isIn === 0 ? true : getstatus.isIn === 2 ? true : true}  onClick={TimeIn} label='Time In' />
                {/* <Button className='p-button-info p-button-sm me-3' severity='help' label='Lunch Break' /> */}
                {/* <button className='p-button-info btn btn-danger' disabled={getstatus === null ? true : getstatus.isIn === 1 ? true : getstatus.isIn === 2 ? false : true}   onClick={(e) => TimeOut(e)} value={getstatus === null ? "" : getstatus.id}>Time Out</button> */}
                <Button className='p-button-info p-button-sm' disabled={getstatus === null ? true : getstatus.isIn === 1 ? true : getstatus.isIn === 2 ? false : true}   onClick={(e) => TimeOut(e)} value={getstatus === null ? "" : getstatus.id} severity='danger' label='Time Out'> </Button>
                    </div>
                }
            </div>
        </div>
    )
}

export default TimeTap
