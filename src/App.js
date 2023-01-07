import './App.css';
import Certificate from './pages/Certificate';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Introduction from './components/content/Introduction';
import ReactComponents from './components/content/ReactComponents';
import ReactJsx from './components/content/ReactJsx';
import ReactHooks from './components/content/ReactHooks';
import ReactClasses from './components/content/ReaclClasses';
import ReactProps from './components/content/ReactProps';
import ReactEvents from './components/content/ReactEvents';
import ReactForms from './components/content/ReactForms';
import ReactRouter from './components/content/ReactRouter';
import ReactQuiz from './components/content/ReactQuiz';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Certificate />}/>
          <Route exact path="/certificate" element={<Certificate />}/>
          <Route path="/introduction" element={<Introduction />}/>
          <Route path="/components" element={<ReactComponents />}/>
          <Route path="/jsx" element={<ReactJsx />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/esc" element={<ReactHooks />}/>
          <Route path="/classes" element={<ReactClasses />}/>
          <Route path="/props" element={<ReactProps />}/>
          <Route path="/events" element={<ReactEvents />}/>
          <Route path="/forms" element={<ReactForms />}/>
          <Route path="/router" element={<ReactRouter />}/>
          <Route path="/quiz" element={<ReactQuiz />}/>
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
