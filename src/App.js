import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* Pages */
import Home from "./pages/Home";
import AllGenres from "./pages/AllGenres";
import AllDevelopers from "./pages/AllDevelopers";
import AllPlatforms from "./pages/AllPlatforms";
/* Components */
import LeftNavBar from './components/navigation/LeftNavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <LeftNavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/genres" element={<AllGenres />}></Route>
          <Route path="/developers" element={<AllDevelopers />}></Route>
          <Route path="/platforms" element={<AllPlatforms />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
