import { useNavigate } from 'react-router-dom'

import { SignInCredentials } from '../AuthContext.type'

export function useAuthContext() {
  const navigate = useNavigate()

  function auth({ email, password }: SignInCredentials) {
    navigate('/dashboard/customers')
    localStorage.setItem('auth', 'ok')
  }

  function isAuthenticated() {
    const authentication = localStorage.getItem('auth')
    const hasAuth = authentication === 'ok' ? true : false
    return hasAuth
  }

  function signOut() {
    return false
  }

  return { auth, isAuthenticated, signOut }
}
