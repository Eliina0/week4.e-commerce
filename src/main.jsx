import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductManagementProvider } from './context/ProductManagement.jsx'
import { ThemeProvider } from './context/Theme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <ProductManagementProvider>
    <App />
    </ProductManagementProvider>
    </ThemeProvider>
  </StrictMode>,
)
