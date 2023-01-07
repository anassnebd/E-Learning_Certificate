import './App.css';
import Certificate from './pages/Certificate';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Introduction from './components/content/Introduction';
import ReactComponents from './components/content/ReactComponents';
import ReactJsx from './components/content/ReactJsx';
import ReactHooks from './components/content/ReactHooks';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Certificate />}/>
          <Route path="/introduction" element={<Introduction />}/>
          <Route path="/components" element={<ReactComponents />}/>
          <Route path="/jsx" element={<ReactJsx />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/esc" element={<ReactHooks />}/>
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
