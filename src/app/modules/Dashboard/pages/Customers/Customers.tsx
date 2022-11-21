import './Customer.scss'

import { useCustomers } from './useCustomers'

export function Customers() {
  const {
    register,
    handleSubmit,
    onSubmit,
    deleteCustomerByIndex,
    errors,
    isValid,
    customers,
  } = useCustomers()

  return (
    <div className="register">
      <h4>Cadastro</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>Dados pessoais</span>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Nome"
              aria-label="Nome"
              {...register('name', { required: true })}
            />
            {errors.name && errors.name.type === 'required' && (
              <span className="error-message" role="alert">
                Campo obrigatório
              </span>
            )}
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Sobrenome"
              aria-label="Sobrenome"
              {...register('lastname', { required: true })}
            />
            {errors.lastname && errors.lastname.type === 'required' && (
              <span className="error-message" role="alert">
                Campo obrigatório
              </span>
            )}
          </div>
        </div>

        <span>Login</span>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="E-mail"
              aria-label="E-mail"
              {...register('email', { required: true })}
            />
            {errors.email && errors.email.type === 'required' && (
              <span className="error-message" role="alert">
                Campo obrigatório
              </span>
            )}
          </div>
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
              aria-label="Senha"
              {...register('password', { required: true })}
            />
            {errors.password && errors.password.type === 'required' && (
              <span className="error-message" role="alert">
                Campo obrigatório
              </span>
            )}
          </div>
        </div>

        <span>Endereco</span>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="CEP"
              aria-label="CEP"
              maxLength={8}
              {...register('postalCode', { required: true, maxLength: 10 })}
            />
            {errors.postalCode && errors.postalCode.type === 'required' && (
              <span className="error-message" role="alert">
                Campo obrigatório
              </span>
            )}
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Endereço"
              aria-label="Endereço"
              {...register('address', { required: true })}
            />
            {errors.address && errors.address.type === 'required' && (
              <span className="error-message" role="alert">
                Campo obrigatório
              </span>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Número"
              aria-label="Número"
              {...register('number', { required: true })}
            />
            {errors.number && errors.number.type === 'required' && (
              <span className="error-message" role="alert">
                Campo obrigatório
              </span>
            )}
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Bairro"
              aria-label="Bairro"
              {...register('district', { required: true })}
            />
            {errors.district && errors.district.type === 'required' && (
              <span className="error-message" role="alert">
                Campo obrigatório
              </span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Cidade"
              aria-label="Cidade"
              {...register('city', { required: true })}
            />
            {errors.city && errors.city.type === 'required' && (
              <span className="error-message" role="alert">
                Campo obrigatório
              </span>
            )}
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Estado"
              aria-label="Estado"
              {...register('state', { required: true })}
            />
            {errors.state && errors.state.type === 'required' && (
              <span className="error-message" role="alert">
                Campo obrigatório
              </span>
            )}
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', margin: '20px 0' }}
            disabled={!isValid}
          >
            Registar
          </button>
        </div>
      </form>
      <h4>Clientes</h4>

      <div className="list">
        <div>
          {customers.map((customer, index) => (
            <div key={index} className="list-item">
              <div className="item">
                <p className="">{customer.email}</p>
                <p className="">{customer.postalCode}</p>
              </div>

              <div className="gap-2 btn-item">
                <button type="button" className="btn btn-primary btn-sm">
                  Editar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    deleteCustomerByIndex(customer)
                  }}
                  className="btn btn-danger btn-sm"
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div></div>
    </div>
  )
}
