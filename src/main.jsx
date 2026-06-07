import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider } from './auth/AuthContext.jsx'
import { ListingsProvider } from './data/ListingsContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ListingsProvider>
          <App />
        </ListingsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
