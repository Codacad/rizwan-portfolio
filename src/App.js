import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Router>
           <Navbar />
           <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/resume" element={<Resume />}/>
              <Route path="/contact" element={<Contact />}/>
           </Routes>
        </Router>
    </div>
  );
}

export default App;
