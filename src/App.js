import "./App.css";

import React, { useState } from "react";
// import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  let pageSize = 12;
  const [prog, setProg] = useState(0);

  const setProgBar = (progress) => {
    setProg(progress);
  };
  return (
    <BrowserRouter>
      <div>
        {/* <Navbar /> */}
        <LoadingBar
          color="#9b4196"
          height={3}
          progress={prog}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                key="general"
                progBar={setProgBar}
                pageSize={pageSize}
                country={"ca"}
                category={"general"}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                key="health"
                progBar={setProgBar}
                pageSize={pageSize}
                country={"ca"}
                category={"health"}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                key="business"
                progBar={setProgBar}
                pageSize={pageSize}
                country={"ca"}
                category={"business"}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                key="entertainment"
                progBar={setProgBar}
                pageSize={pageSize}
                country={"ca"}
                category={"entertainment"}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                key="sports"
                progBar={setProgBar}
                pageSize={pageSize}
                country={"ca"}
                category={"sports"}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                key="technology"
                progBar={setProgBar}
                pageSize={pageSize}
                country={"ca"}
                category={"technology"}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                key="science"
                progBar={setProgBar}
                pageSize={pageSize}
                country={"ca"}
                category={"science"}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
