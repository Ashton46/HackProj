import React, { useState, useEffect } from 'react';
import { DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import "./Calendar.css";
import Select from 'react-dropdown-select'
import "./Calendar.py";


const options = [
    { value: 'ICS 31', label: 'ICS 31' },
    { value: 'ICS 32', label: 'ICS 32' },
    { value: 'ICS 33', label: 'ICS 33' },
];

const Calendar = () => {
    const config = {
      viewType: "Week",
      durationBarVisible: false,
    };
  
    return (
        <DayPilotCalendar
        {...config}
        viewType={"Resources"}
        />
        
    );
    
    <Select 
        multi
        options={options}
        onChange={(values) => this.onChange(values)}
    />

      
}

export default Calendar;
