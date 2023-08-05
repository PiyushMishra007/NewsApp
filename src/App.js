import "./App.css";
import { Routes, Route,BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 12;
  const [progress, setProgress] = useState(0)
  const [countrys , setCountrys] =useState("in");

    return (
   <Router>
      <div className="container1">

        <div><Navbar setCountrys={setCountrys}/></div>
        <LoadingBar
        height={2}
        color='#f11946'
        progress={progress} 
        />
        <div className="container" >
          <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key=" general" pageSize={pageSize} country={countrys} category="general"/>} />
          <Route exact path="/business" element={<News setProgress={setProgress} key= "business" pageSize= {pageSize}country={countrys}  category="business"/>} />
          <Route exact path="/entertainment" element={<News setProgress={ setProgress} key=" entertainment" pageSize= {pageSize}country={countrys} category="entertainment"/>} />
          <Route exact path="/health" element={<News setProgress={setProgress} key= "health" pageSizkeye= {pageSize}country={countrys} category="health"/>} />
          <Route exact path="/science" element={<News setProgress={setProgress} key= "science" pageSize= {pageSize}country={countrys} category="science"/>} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key= "sports" pageSize= {pageSize}country={countrys} category="sports"/>} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key= "technology" pageSize= {pageSize}country={countrys} category="technology"/>} />
          </Routes>
        </div>
      </div>
    </Router>
    );
  }
  export default App;

