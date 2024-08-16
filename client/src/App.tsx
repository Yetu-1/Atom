import { Navigate, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'
import { Register } from './components/Register'
import { Home } from './components/Home'
import { Login } from './components/Login'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>

  )
}

export default App
