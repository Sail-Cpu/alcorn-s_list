import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* Pages */
import Home from "./pages/Home";
import AllGenres from "./pages/category/AllGenres";
import AllDevelopers from "./pages/category/AllDevelopers";
import AllPlatforms from "./pages/category/AllPlatforms";
import NewOld from "./pages/category/NewOld";
import Games from "./pages/games/Games";
import GameDetails from "./components/game/GameDetails";
import Search from "./pages/search/Search";
import NoFoundPage from "./pages/other/NoFoundPage";
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
          <Route path="/:type/:typeName" element={<Games />}></Route>
          <Route path="/game/:id" element={<GameDetails />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="*" element={<NoFoundPage />} ></Route>
          <Route path="/new-old/:name" element={<NewOld />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
