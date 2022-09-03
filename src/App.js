import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  x1="Ankit"
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        
        <Routes>
              <Route path="/science"  element={<News key="science" pageSize={5} country="in" category="science"/>} />
              <Route path="/business"  element={<News key="business" pageSize={5} country="in" category="business"/>} />
              <Route path="/entertainment"  element={<News key="entertainment" pageSize={5} country="in" category="entertainment"/>} />
              <Route path="/general" element={<News key="general" pageSize={5} country="in" category="general"/>} />
              <Route path="/" element={<News key="general" pageSize={5} country="in" category="general"/>} />
              <Route path="/health" element={<News key="health" pageSize={5} country="in" category="health"/>} />
              <Route path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports"/>} />
              <Route path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology"/>} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

