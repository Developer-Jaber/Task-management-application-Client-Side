import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/tailwindcss.css'
import Router from './Router/Router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router></Router>
  </StrictMode>,
)
