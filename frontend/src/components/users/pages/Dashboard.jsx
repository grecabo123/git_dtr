import axios from 'axios'
import { Button } from 'primereact/button'
import { Panel } from 'primereact/panel'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import swal from 'sweetalert'
import TimeTap from '../Time/TimeTap'
import { Badge } from 'primereact/badge'
import moment from 'moment'
import { Skeleton } from 'primereact/skeleton'

function Dashboard() {

    const [loading, setloading] = useState(true);
    const [TimeData, setTimeData] = useState([]);

    useEffect(() => {

        const id = localStorage.getItem('auth_id');

        axios.get(`/api/TimeMonitor/${id}`).then(res => {
            if (res.data.status === 200) {
                setTimeData(res.data.data);
            }
            setloading(false);
        }).catch((error) => {
            if(error.response.status === 500){
                swal("Warning",error.response.statusText,'warning');

            }
        })
    }, [])



    const column = [
        {
            name: "Time In - AM",
            selector: row => row.TimeIN !== null ? moment(row.TimeIN).format('hh:mm a') : "",
        },
        {
            name: "Time Out - AM",
            selector: row => row.TimeOut !== null ? moment(row.TimeOut).format('hh:mm a') : "",
        },
        {
            name: "Lunch Break",
            selector: row => row.isBreak === 0 ? <Badge severity={'danger'} value={'No Lunch'} /> : <Badge severity={'success'} value={'Lunch'} />,
        },
        {
            name: "Time In - PM",
            selector: row => row.TimeInPM !== null ? moment(row.TimeInPM).format('hh:mm: a') : "",
        },
        {
            name: "Time Out - PM",
            selector: row => row.TimeOutPM !== null ? moment(row.TimeOutPM).format('hh:mm a') : "",
        },
        {
            name: "Total Hours",
            selector: row => row.hours_render !== null ? "12" : "",
        },
        {
            name: "Date",
            selector: row => moment(row.created_at).format('MMM D YYYY'),
        },
    ];

    if(loading){
        return (
            <Skeleton className='w-100' borderRadius='20'/>
        )
    }

    // console.log(moment('2023-08-09T14:14:41+08:00').format('hh:mm'))
    // const timerduration = moment('2023-08-08 06:54:04').diff('2023-08-08 06:38:14','hours')

    // console.log(moment().format('YYYY-MM-DD hh:mm:ss a'));



    return (
        <div>
            <TimeTap />
            <Panel header="Time Monitoring">
                <DataTable
                    title=""
                    columns={column}
                    data={TimeData}
                    pagination
                    selectableRows
                />
            </Panel>
        </div>
    )
}

export default Dashboard
