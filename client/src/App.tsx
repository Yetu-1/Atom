import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuidV4 } from "uuid"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'
import { Register } from './components/Register'
import { Home } from './components/Home'

function App() {

  return (
    <Container className="my-4">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Container>

  )
}

export default App
