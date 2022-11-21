import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface ICustomer {
  address: string
  city: string
  district: string
  email: string
  lastname: string
  name: string
  number: string
  password: string
  postalCode: string
  state: string
}

const schema = yup
  .object({
    name: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    postalCode: yup.string().required(),
    address: yup.string().required(),
    number: yup.string().required(),
    district: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
  })
  .required()

export function useCustomers() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<ICustomer>({
    resolver: yupResolver(schema),
  })

  const watchPostalCode = watch('postalCode')

  const [customers, setCustomers] = useState<ICustomer[]>([])

  const onSubmit = (data: ICustomer) => {
    addNewCustomer(data)
    reset()
  }

  const getAddressByPostalCode = useCallback(
    (postalCode: string) => {
      fetch(`https://viacep.com.br/ws/${postalCode}/json/`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((response) =>
          response.json().then((data) => {
            setValue('postalCode', data.cep)
            setValue('district', data.bairro)
            setValue('city', data.localidade)
            setValue('state', data.uf)
            setValue('address', data.logradouro)
          }),
        )
        .catch((err) => console.log('error', err))
    },
    [setValue],
  )

  const addNewCustomer = (data) => {
    setCustomers(customers.concat(data))
  }

  const deleteCustomerByIndex = (customer: ICustomer): void => {
    const result = customers.filter((item) => item !== customer)
    setCustomers(result)
  }

  useEffect(() => {
    if (watchPostalCode?.length === 8) {
      getAddressByPostalCode(watchPostalCode)
    }
  }, [getAddressByPostalCode, customers, watchPostalCode])

  return {
    register,
    handleSubmit,
    onSubmit,
    deleteCustomerByIndex,
    errors,
    isValid,
    customers,
  }
}
