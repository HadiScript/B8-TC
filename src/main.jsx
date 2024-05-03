import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom'
import AuthProvider from './context/auth.context'


import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import ThemeProvider from './context/theme.context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </Router>
)
