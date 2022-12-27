import './App.css';
import Certificate from './pages/Certificate';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Certificate />}/>
          <Route path="/ss" element={<Home />}/>
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
