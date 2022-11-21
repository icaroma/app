import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { SignIn } from '../modules/Authentication'
import { Dashboard } from '../modules/Dashboard'
import { ProtectedRoute } from './components/ProtectedRoute'

export function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext)
  const isAuth = isAuthenticated()

  return (
    <Routes>
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/" element={<SignIn />} />
    </Routes>
  )
}
