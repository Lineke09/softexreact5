
import Empresa from "./Pages/Empresa";
import React from "react";
import Home from "./Pages/Home";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <header className="App-header">

    
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" exact='true'element={<Home/>}></Route>
          <Route path="/empresa" element={<Empresa/>}></Route>
        </Routes>
      </Router>
      </header>
    </div>
  );
}
 
export default App;
