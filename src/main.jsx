import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import NeonCursorGlow from './components/animations/NeonCursorGlow'
import MainLayout from './components/layout/MainLayout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout/>
    <NeonCursorGlow/>
  </StrictMode>
)
