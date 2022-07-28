import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MNavbar from "./layout/MNavbar";
import Detail from "./components/Detail";
import "./App.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="principalTitle">Apis</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MNavbar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
