import logo from './logo.svg';
import './App.css';
import React from 'react';
import Landing from './Landing';
import TODO from './TODO';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <router>
      <switch>
        <Route  path = "/" component = {Landing}/>
        <Route  path = "/" component = {TODO}/>

      </switch>
    </router>
  );
}

export default App;
