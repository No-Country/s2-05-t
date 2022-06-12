import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Navbar from './components/Navbar/Navbar'
import Carrito from './pages/Carrito/Carrito'
import SearchResults from './pages/SearchResults/SearchResults'
import Profile from './pages/Profile/Profile'
import Burgers from './pages/Burgers/Burgers'

function App () {
  const { pathname } = useLocation()

  return (
    <div className='App'>
      {pathname !== '/login' && pathname !== '/register' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Carrito />} />
        <Route path='/search/:searched' element={<SearchResults />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/burgers' element={<Burgers />} />
      </Routes>
    </div>
  )
}

export default App
