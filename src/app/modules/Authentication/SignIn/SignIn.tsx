import './Signin.scss'

import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { AuthContext } from '../../../../contexts/AuthContext'
import CardBoxOpen from './cardbox-open.png'

interface IFormInput {
  email: string
  password: string
}

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required()

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  const { signIn } = useContext(AuthContext)

  const onSubmit = (data) => {
    signIn({
      email: data.email,
      password: data.password,
    })
  }

  return (
    <div className="signin">
      <div className="signin-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="exemplo@mail.com"
              {...register('email', {
                required: 'required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message:
                    'O valor inserido não corresponde ao formato de e-mail',
                },
              })}
            />
            {errors.email && <span role="alert">{errors.email.message}</span>}
            {errors.email && errors.email.type === 'required' && (
              <span role="alert">Necessario email</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Senha"
              {...register('password', { required: true })}
            />
            {errors.password && errors.password.type === 'required' && (
              <span role="alert">Necessario senha</span>
            )}
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!isValid}
            >
              Acessar
            </button>
          </div>
        </form>
      </div>
      <div className="signin-cover">
        <img src={CardBoxOpen} alt="" />
      </div>
    </div>
  )
}
