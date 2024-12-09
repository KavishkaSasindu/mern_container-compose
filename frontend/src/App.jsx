import React from "react";
import Home from "./components/Home";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Create from "./components/Create";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<Create/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
