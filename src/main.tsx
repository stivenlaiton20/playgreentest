import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { ThemesProvider } from './contexts/ThemesContext'
import { AuthProvider } from './contexts/AuthContext'
import { ApiDataProvider } from './contexts/ApiDataContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemesProvider>
      <AuthProvider>
        <ApiDataProvider>
          <RouterProvider router={router} />
        </ApiDataProvider>
      </AuthProvider>
    </ThemesProvider>
  </React.StrictMode>,
)
