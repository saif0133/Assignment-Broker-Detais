// index.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import WelcomePage from './pages/WelcomePage/WelcomePage.tsx'
import BrokerDetails from './pages/BrokerDetails/BrokerDetails.tsx'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/broker-details" element={<BrokerDetails />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
