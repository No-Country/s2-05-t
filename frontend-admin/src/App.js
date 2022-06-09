import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginFormAdmin } from './components/form/LoginForm'
import AdminProvider from './context/AdminProvider'
import AdminPages from './pages/AdminPages'

function App () {
  return (
    <AdminProvider>
      <Router>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/login' element={<LoginFormAdmin />} />
          <Route path='/dashboard' element={<AdminPages />} />
        </Routes>
      </Router>
    </AdminProvider>
  )
}

export default App
