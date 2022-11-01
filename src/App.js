import React from "react";
/* Pages */
import Home from "./pages/Home";
/* Components */
import NavBar from './components/navigation/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
