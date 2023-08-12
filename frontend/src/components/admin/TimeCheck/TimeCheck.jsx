import { Skeleton } from 'primereact/skeleton';
import React, { useEffect, useState } from 'react'

function TimeCheck(props) {

    const [loading, setloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        },1500)
    },[]);


    if(loading){
        return (
            <Skeleton className='w-100' borderRadius='20px' />
        )
    }

    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur ipsa quod veritatis dolorem molestiae est laudantium suscipit iusto recusandae.</p>
        </div>
    )
}

export default TimeCheck
