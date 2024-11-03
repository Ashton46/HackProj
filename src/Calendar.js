import React, { useState, useEffect } from 'react';
import {DayPilot, DayPilotCalendar, DaypilotNavigator} from "@daypilot/daypilot-lite-react";
import "./Calendar.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const Calendar = () => {
    const [startDate, setStartDate] = useState(DayPilot.Date.today());

const [courses, setCourses] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/courses')
    .then(response => response.json())
    .then(data => {setCourses(data)})
    .catch(error => console.error(error));
  }, []); // Dependency array to ensure this runs only once

  const fetchSchedules = (term, department, courseNumber) => {
    fetch(`http://127.0.0.1:5000/schedules?term=${encodeURIComponent(term)}&department=${encodeURIComponent(department)}&courseNumber=${encodeURIComponent(courseNumber)}`)
    .then(response => response.json())
    .then(data => {console.log(data)})
    .catch(error => console.error(error));
};

  const config = {
    viewType: "Week",
    durationBarVisible: false,
  };

  const onSelect = (selectedOption) => {

    const selectedCourse = courses.find(course => course.title === selectedOption.value); 
    setSelected(selectedCourse); 
    if (selectedCourse) { const { term, department, courseNumber } = selectedCourse; 
        fetchSchedules(term, department, courseNumber); 
}
    
    
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
        <div>
        <DayPilotCalendar
        {...config}
        columns={columns}
        events={events}
        />   

        <Dropdown
            options={courses.map(course => course.title)}
            onChange={onSelect}
            value={selected}
            placeholder='Select an option'
          />
        </div>
      );
  }
}

export default Calendar;