import React, { useEffect, useState } from 'react'
import { Skeleton } from 'primereact/skeleton';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timegrid from '@fullcalendar/timegrid'
import interac from '@fullcalendar/interaction'
import { Panel } from 'primereact/panel'
import { Card } from 'primereact/card'
import { Badge } from 'primereact/badge';
import axios from 'axios';



function Dashboard() {

    const [loading, setLoading] = useState(true);
    const [AllData, setAll] = useState({
        alldata: "",
        active: "",
        not: "",
    })

    useEffect(() => {
        axios.get(`/api/CountData`).then(res => {
            if (res.data.status === 200) {
                setAll({
                    alldata: res.data.all,
                    active: res.data.active,
                    not: res.data.not,
                })
            }
            setLoading(false)
        }).catch((error) => {

        })
    }, []);


    if (loading) {
        return (
            <>
                <Skeleton width="w-100 h-100" className="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="w-100" className="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="w-100" className="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="w-100" className="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="w-100" className="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="w-100" className="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="w-100" className="mb-2" borderRadius="16px"></Skeleton>
            </>
        )
    }

    return (
        <>
            {/* <h4>DashBaord</h4> */}
            <div className='container-fluid'>
                <div className="row justify-content-center">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 mb-2">
                            <Card title="Total Accounts" subTitle="Total Data">
                                <Badge value={AllData.alldata} severity="info" size="normal"></Badge>
                            </Card>
                        </div>
                        <div className="col-lg-4 col-sm-12 mb-2">
                            <Card title="Total Active" subTitle="Total Data">
                                <Badge value={AllData.active} severity="success" size="normal"></Badge>
                            </Card>
                        </div>
                        <div className="col-lg-4 col-sm-12 mb-2">
                            <Card title="Total InActive" subTitle="Total Data">
                                <Badge value={AllData.not} severity="danger" size="normal"></Badge>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <FullCalendar
                        plugins={[dayGridPlugin, timegrid, interac]}
                        initialView='dayGridMonth'
                    />
                </div>
            </div>
        </>
    )
}

export default Dashboard
