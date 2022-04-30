import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
        <Router>
           <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/resume" element={<Resume />}/>
           </Routes>
        </Router>
    </div>
  );
}

export default App;
