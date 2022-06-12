import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY
  pageSize = 12;
  state = {
    progBar: 0
  }

  setProgBar = (progress) => {
    this.setState({ progBar: progress })
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar
            color='#9b4196'
            height={3}
            progress={this.state.progBar}
          />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} key='general' progBar={this.setProgBar} pageSize={this.pageSize} country={'ca'} category={'general'} />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} key='health' progBar={this.setProgBar} pageSize={this.pageSize} country={'ca'} category={'health'} />} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} key='business' progBar={this.setProgBar} pageSize={this.pageSize} country={'ca'} category={'business'} />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key='entertainment' progBar={this.setProgBar} pageSize={this.pageSize} country={'ca'} category={'entertainment'} />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} key='sports' progBar={this.setProgBar} pageSize={this.pageSize} country={'ca'} category={'sports'} />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} key='technology' progBar={this.setProgBar} pageSize={this.pageSize} country={'ca'} category={'technology'} />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} key='science' progBar={this.setProgBar} pageSize={this.pageSize} country={'ca'} category={'science'} />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}




