import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import {AverageWatchTime} from '../Components/GitFeature/AvgWatchTime';
import   WatchTime from '../Components/VercelApp/WatchTime';
import Home from "../Components/Home";
const index = () => {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/git-feature" element={<AverageWatchTime />} />
          <Route path="/Vercelapp" element={<WatchTime />} />
          
    </Routes>
  )
}

export default index