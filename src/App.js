import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Writings from "./components/Writings";
import { Route, Routes } from "react-router";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App xl:w-8/12 mx-auto lg:w-10/12 w-11/12 flex flex-col min-h-screen pt-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="writings" element={<Writings />} />
      </Routes>
    </div>
  );
}

export default App;
