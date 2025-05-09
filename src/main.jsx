import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
    
    
  {/* isme hm taskcontxt ko auth ka andr likhyn ya vice versa farq nae prta bs app ko in dno ka andr rkhna h */}
    
    
  </StrictMode>
)
