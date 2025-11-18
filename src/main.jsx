import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import NeonCursorGlow from './components/animations/NeonCursorGlow'
import MainLayout from './components/layout/MainLayout'
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout/>
    <NeonCursorGlow/>
  </StrictMode>
)
