import React, { useState, useEffect } from 'react';
import { DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import "./Calendar.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const Calendar = ({ options }) => {
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

  }

  return (
    <div>
      <DayPilotCalendar {...config} viewType="Resources" />
      <Dropdown
        options={courses.map(course => course.title)}
        onChange={onSelect}
        value={selected}
        placeholder='Select an option'
      />
    </div>
  );
};

export default Calendar;

