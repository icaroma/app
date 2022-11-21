import { createContext } from 'react'

import {
  SignInCredentials,
  AuthContextData,
  AuthProviderProps,
} from './AuthContext.type'
import { useAuthContext } from './hooks/useAuthContext'

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const { auth, isAuthenticated } = useAuthContext()

  async function signIn({ email, password }: SignInCredentials) {
    auth({ email, password })
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
