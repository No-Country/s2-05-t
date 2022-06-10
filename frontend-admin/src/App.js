import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginFormAdmin } from './components/form/LoginForm'
import Home from './pages/Home'
import AdminProvider from './context/AdminProvider'
import Navbar from './components/Navbar'
import PrivateRoute from './routes/PrivateRoute'
import Products from './components/Products'

function App () {
  
  return (
    <AdminProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginFormAdmin />} />
          <Route path='/products' element={<PrivateRoute>
            <Products />
          </PrivateRoute>} />
        </Routes>
      </Router>
    </AdminProvider>
  )
}

export default App
