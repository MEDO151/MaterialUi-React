
import { Route, Routes } from 'react-router-dom';
import Hero from './pages/hero';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {

  return (
    
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/task2' element={<NotFound/>} />
        <Route path='/task3' element={<Home/>} />
      </Routes>
  )
}

export default App
