import React, { useState, useEffect } from 'react';
import {DayPilot, DayPilotCalendar, DaypilotNavigator} from "@daypilot/daypilot-lite-react";
import "./Calendar.css";
import Select from 'react-dropdown-select'
import "./Calendar.py";


const options = [
    { value: 'ICS 31', label: 'ICS 31' },
    { value: 'ICS 32', label: 'ICS 32' },
    { value: 'ICS 33', label: 'ICS 33' },
];




const Calendar = () => {
    const [startDate, setStartDate] = useState(DayPilot.Date.today());

    const [columns, setColumns] = useState([]);
    const [events, setEvents] = useState([]);
    
    
    useEffect(() => {
        setColumns([
          { name: "Sunday", id: "Sun" },
          { name: "Monday", id: "Mon" },
          { name: "Tuesday", id: "Tues" },
          { name: "Wednesday", id: "Wed" },
          { name: "Thursday", id: "Thu" },
          { name: "Friday", id: "Fri" },
          { name: "Saturday", id: "Sat" },
        ]);
    }, []);
    
    useEffect(() => {
        setEvents([
          {
            id: 1,
            text: "History 37B Dis",
            start: "2024-10-28T10:00:00",
            end: "2024-10-28T10:50:00",
            barColor: "#9fc2e4",
            resource: "Monday"
          },
          {
            id: 2,
            text: "History 37B Lec",
            start: "2024-10-28T11:00:00",
            end: "2024-10-28T11:50:00",
            barColor: "#9fc2e4",
            resource: "Monday"
          },
          {
            id: 3,
            text: "ICS 31 Lab",
            start: "2024-10-28T17:00:00",
            end: "2024-10-28T18:20:00",
            barColor: "#9fc2e4",
            resource: "Monday"
          },
          {
            id: 4,
            text: "ICS 31 Lec",
            start: "2024-10-29T11:00:00",
            end: "2024-10-29T12:20:00",
            barColor: "#9fc2e4",
            resource: "Tuesday"
          },
          {
            id: 5,
            text: "History 37B Lec",
            start: "2024-10-30T11:00:00",
            end: "2024-10-30T11:50:00",
            barColor: "#9fc2e4",
            resource: "Wednesday"
          },
          {
            id: 6,
            text: "ICS 31 Lab",
            start: "2024-10-30T17:00:00",
            end: "2024-10-30T16:20:00",
            barColor: "#9fc2e4",
            resource: "Wednesday"
          },
          {
            id: 7,
            text: "ICS 31 Lec",
            start: "2024-10-31T11:00:00",
            end: "2024-10-31T12:20:00",
            barColor: "#9fc2e4",
            resource: "Tuesday"
          },
          {
            id: 8,
            text: "History 37B Lec",
            start: "2024-11-01T11:00:00",
            end: "2024-11-01T11:50:00",
            barColor: "#9fc2e4",
            resource: "Tuesday"
          },
          {
            id: 9,
            text: "Zothacks 2024",
            start: "2024-11-02T08:00:00",
            end: "2024-11-02T22:00:00",
            barColor: "#9fc2e4",
            resource: "Tuesday"
          },
        ]);
    }, []);

    const config = {
      viewType: "Week",
      durationBarVisible: false,
      startDate: startDate
    };
  
    return (
        <DayPilotCalendar
        {...config}
        // startDate={"2024-11-03"}
        // viewType={"Resources"}
        columns={columns}
        events={events}
        />
        
    );
    
    <Select 
        multi
        options={options}
        onChange={(values) => this.onChange(values)}
    />

      
}

export default Calendar;