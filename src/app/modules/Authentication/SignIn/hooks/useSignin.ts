import { useContext } from 'react'

import { AuthContext } from '@/contexts/AuthContext'

export interface SignInProps {
  email: string
  password: string
}

export function useSignin() {
  const { signIn } = useContext(AuthContext)

  async function handleSubmit(values: SignInProps) {
    await signIn({
      email: values.email,
      password: values.password,
    })
  }

  return { handleSubmit }
}
