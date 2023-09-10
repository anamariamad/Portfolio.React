import { Routes } from 'react-router-dom';
import './App.css';
import Portfolio from './Components/Portfolio/Portfolio'

function App() {

  return (
      <Routes>
        <Route exact path="/" element={Portfolio} />
        <Route exact path="/:id" element={Portfolio} />
      </Routes>
  )
}

export default App;
