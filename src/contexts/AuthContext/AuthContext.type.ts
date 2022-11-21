import { ReactNode } from 'react'

export interface User {
  username?: string
  name?: string
}

export interface SignInCredentials {
  email: string
  password: string
}

export interface AuthContextData {
  signIn: (credentials: SignInCredentials) => Promise<void>
  // signOut: () => void
  isAuthenticated: () => boolean
}

export interface AuthProviderProps {
  children: ReactNode
}
