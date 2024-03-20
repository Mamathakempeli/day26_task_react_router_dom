import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from 'react'
import Card from './components/Card'
import CardMap from './components/CardMap'
import Footer from './components/Footer'
import Nav from './components/Nav'
import TopNav from './components/TopNav'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { data } from "./utils/constants";


function App() {
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    const sortedData = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    ); // to sort Data by Date
    setSortedData(sortedData);
  }, []);

  return (
    <>
      <TopNav />
      <Nav />
      <div className="card-container main-card mt-3 pt-3 d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {sortedData.map((ele) => (
                    <Card key={ele.id} data={ele} />
                  ))}
                </>
              }
            ></Route>
            <Route
              path="/FullStackDevelopment"
              element={
                <CardMap data={sortedData} val={"Full Stack Development"} />
              }
            ></Route>
            <Route
              path="/DataScience"
              element={<CardMap data={sortedData} val={"Data Science"} />}
            ></Route>
            <Route
              path="/CyberSecurity"
              element={<CardMap data={sortedData} val={"Cyber Security"} />}
            ></Route>
            <Route
              path="/Career"
              element={<CardMap data={sortedData} val={"Career"} />}
            ></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App
