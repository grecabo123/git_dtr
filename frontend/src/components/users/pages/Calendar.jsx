import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timegrid from '@fullcalendar/timegrid'
import interac from '@fullcalendar/interaction'

function Calendar() {
    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timegrid, interac]}
                initialView='dayGridMonth'
            />
        </div>
    )
}

export default Calendar
