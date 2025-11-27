import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import MainLayout from './components/layout/MainLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
