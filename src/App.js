import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key='general' pageSize={this.pageSize} country={'ca'} category={'general'} />} />
            <Route exact path="/health" element={<News key='health' pageSize={this.pageSize} country={'ca'} category={'health'} />} />
            <Route exact path="/business" element={<News key='business' pageSize={this.pageSize} country={'ca'} category={'business'} />} />
            <Route exact path="/entertainment" element={<News key='entertainment' pageSize={this.pageSize} country={'ca'} category={'entertainment'} />} />
            <Route exact path="/sports" element={<News key='sports' pageSize={this.pageSize} country={'ca'} category={'sports'} />} />
            <Route exact path="/technology" element={<News key='technology' pageSize={this.pageSize} country={'ca'} category={'technology'} />} />
            <Route exact path="/science" element={<News key='science' pageSize={this.pageSize} country={'ca'} category={'science'} />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}




