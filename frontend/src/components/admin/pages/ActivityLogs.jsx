import axios from 'axios'
import moment from 'moment';
import { Skeleton } from 'primereact/skeleton';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { FcApproval } from 'react-icons/fc';

function ActivityLogs() {


    const [Logs, SetLogs] = useState([]);

    const [loading, setloading] = useState(true);

    useEffect(() => {

        const id = localStorage.getItem("auth_id");
        axios.get(`/api/Logs/${id}`).then(res => {
            if (res.data.status === 200) {
                SetLogs(res.data.data);
            }
            setloading(false);
        }).catch((error) => {
            if (error.response.status === 500) {

            }
        });
    }, [])


    if (loading) {
        return (
            <Skeleton className='p-skeleton' width='100%' borderRadius='20px' />
        )
    }

    const column = [
        {
            name: "Activity",
            selector: row => <div>
                <FcApproval size={15} className='align-content-center align-middle text-secondary me-1' /> <span>{row.activity}</span>
            </div>,
            sortable: true,
        },
        {
            name: "Date Time",
            selector: row => moment(row.created_at).format('MMM D YYYY h:mm:ss a'),
            sortable: true,
        },
    ]

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <DataTable
                            title="Activity Logs"
                            columns={column}
                            data={Logs}
                            pagination
                            selectableRows
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityLogs
