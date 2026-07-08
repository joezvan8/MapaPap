import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@stylesheets/index.css'
import App from './App.tsx'
import '@fontsource/roboto/300.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
