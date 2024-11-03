import logo from './logo.svg';
import './App.css';
import React from 'react';
import Landing from './Landing';
import TODO from './to-do';
import Calendar from './Calendar';
import "./Calendar.css";
import ReactDom from "react-dom/client";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route  path = "landing" element = {<Landing/>}/>
        <Route  path = "todo" element = {<TODO/>}/>
        <Route  path = "calendar" element = {<Calendar/>}/>

      </Routes>
    </Router>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App/>);

