import { Navigate } from 'react-router-dom'

export function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) {
    return <Navigate to="/" replace />
  }

  return children
}
