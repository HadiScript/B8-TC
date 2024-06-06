import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom'
import AuthProvider from './context/auth.context'


import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import ThemeProvider from './context/theme.context'
import { Toaster } from 'react-hot-toast'


import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <QueryClientProvider client={client}>
      <AuthProvider>
        <ThemeProvider>
          <Toaster />
          <App />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </Router>
)
