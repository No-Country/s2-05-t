import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

function App () {
  return (
    <div className='App'>
      <header className='App-header' />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
