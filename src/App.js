import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* Pages */
import Home from "./pages/Home";
import AllGenres from "./pages/category/AllGenres";
import AllDevelopers from "./pages/category/AllDevelopers";
import AllPlatforms from "./pages/category/AllPlatforms";
import NewOld from "./pages/category/NewOld";
import Games from "./pages/games/Games";
import Category from "./components/Category";
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
          <Route path="alcorn-s_list/" element={<Home />}></Route>
          <Route path="alcorn-s_list/genres" element={<AllGenres />}></Route>
          <Route path="alcorn-s_list/developers" element={<AllDevelopers />}></Route>
          <Route path="alcorn-s_list/platforms" element={<AllPlatforms />}></Route>
          <Route path="alcorn-s_list/:type/:typeName" element={<Games />}></Route>
          <Route path="alcorn-s_list/game/:id" element={<GameDetails />}></Route>
          <Route path="alcorn-s_list/search" element={<Search />}></Route>
          <Route path="alcorn-s_list/*" element={<NoFoundPage />} ></Route>
          <Route path="alcorn-s_list/new-old/:name" element={<NewOld />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
