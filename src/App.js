import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {

  apiKey = "404891383398468f9c2505af24c5d83f";

  state = {
    progress : 0
  }
  setProgress = (progress) => {
    this.setState({progress : progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        
        <Routes>
              <Route path="/science"  element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="science" pageSize={5} country="in" category="science"/>} />
              <Route path="/business"  element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="business" pageSize={5} country="in" category="business"/>} />
              <Route path="/entertainment"  element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="entertainment" pageSize={5} country="in" category="entertainment"/>} />
              <Route path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="general" pageSize={5} country="in" category="general"/>} />
              <Route path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="general" pageSize={5} country="in" category="general"/>} />
              <Route path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="health" pageSize={5} country="in" category="health"/>} />
              <Route path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="sports" pageSize={5} country="in" category="sports"/>} />
              <Route path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress}  key="technology" pageSize={5} country="in" category="technology"/>} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

