import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Navbar from './components/Navbar/Navbar'

function App () {
  const { pathname } = useLocation()

  return (
    <div className='App'>
      {pathname !== '/login' && pathname !== '/register' &&
        <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
