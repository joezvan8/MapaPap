import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@stylesheets/index.css'
import { StyledEngineProvider } from "@mui/material/styles";
import App from './App.tsx'
import '@fontsource/roboto/300.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <StyledEngineProvider injectFirst>
          <App />
      </StyledEngineProvider>
  </StrictMode>
)
