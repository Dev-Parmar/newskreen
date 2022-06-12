import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

export default function App() {
  let apiKey = process.env.REACT_APP_API_KEY
  let pageSize = 12;

  const [progBar, setProgBar] = useState(0)
  const handleProgBar = (progress) => {
    setProgBar(progress)
  }
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <LoadingBar
          color='#9b4196'
          height={3}
          progress={progBar}
        />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} key='general' progBar={handleProgBar} pageSize={pageSize} country={'ca'} category={'general'} />} />
          <Route exact path="/health" element={<News apiKey={apiKey} key='health' progBar={handleProgBar} pageSize={pageSize} country={'ca'} category={'health'} />} />
          <Route exact path="/business" element={<News apiKey={apiKey} key='business' progBar={handleProgBar} pageSize={pageSize} country={'ca'} category={'business'} />} />
          <Route exact path="/entertainment" element={<News apiKey={apiKey} key='entertainment' progBar={handleProgBar} pageSize={pageSize} country={'ca'} category={'entertainment'} />} />
          <Route exact path="/sports" element={<News apiKey={apiKey} key='sports' progBar={handleProgBar} pageSize={pageSize} country={'ca'} category={'sports'} />} />
          <Route exact path="/technology" element={<News apiKey={apiKey} key='technology' progBar={handleProgBar} pageSize={pageSize} country={'ca'} category={'technology'} />} />
          <Route exact path="/science" element={<News apiKey={apiKey} key='science' progBar={handleProgBar} pageSize={pageSize} country={'ca'} category={'science'} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )

}




