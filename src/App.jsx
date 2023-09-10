import { Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './Components/Portfolio/Portfolio'
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';

function App() {

  return (
      <Routes>
        <Route exact path="/" element={<Portfolio />} />
        <Route exact path="/:id" element={<ProjectDetails />} />
      </Routes>
  )
}

export default App;
