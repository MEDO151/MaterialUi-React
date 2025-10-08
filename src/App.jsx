
import { Route, Routes } from 'react-router-dom';
import Hero from './pages/hero';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {

  return (
    
      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/task2' element={<NotFound/>} />
        <Route path='/task3' element={<Home/>} />
        <Route path='/task4' element={<Register/>} />
      </Routes>
  )
}

export default App
