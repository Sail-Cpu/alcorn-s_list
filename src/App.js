import React from "react";
/* Pages */
import Home from "./pages/Home";
/* Components */
import LeftNavBar from './components/navigation/LeftNavBar';

function App() {
  return (
    <div className="App">
      <LeftNavBar />
      <Home />
    </div>
  );
}

export default App;
