import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Inicial from './pages/Inicial'
import Navbar from './components/CustomNavbar'
import Faculdade from './pages/Faculdade'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container className='my-4'>
        <Routes>
          <Route path='/' element={<Inicial />} />
          <Route path='/a-faculdade' element={<Faculdade />} />
          {/* Adicione outras rotas conforme necessário */}
          <Route path='*' element={<h2>Página não encontrada</h2>} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
