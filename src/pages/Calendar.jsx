import moment from 'moment'
import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { scheduleData } from '../data/dummy'
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = momentLocalizer(moment)
const events = [
  {
    id: 0,
    title: 'Meeting',
    start: moment({ hours: 8 }).toDate(),
    end: moment({ hours: 10 }).toDate(),
  },
  {
    id: 1,
    title: 'Lunch',
    start: moment({ hours: 12 }).toDate(),
    end: moment({ hours: 13 }).toDate()
  },
  {
    id: 2,
    title: 'Coding',
    start: moment({ hours: 14 }).toDate(),
    end: moment({ hours: 17 }).toDate(),
  },
];
const CalendarPage = () => {
  return (
    <div style={{height:'550px'}} className='p-4 m-4 lg:mt-8 sm:mt-20 rounded-3xl'>
      <Calendar 
      events={events}
      localizer={localizer}
      style={{height:500}}
      defaultDate={new Date(2023,22,7)}
      />
    </div>
  )
}

export default CalendarPage;