import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './components/Intro';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/about' element={<AboutMe/>}/>
      </Routes>
    </Router>
  );
}

export default App;