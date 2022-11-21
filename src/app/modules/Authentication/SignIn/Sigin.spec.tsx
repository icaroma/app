import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import { SignIn } from './SignIn'

describe('<Signin />', () => {
  it('should render signin form', () => {
    render(<SignIn />)
    const element = screen.getByLabelText(/E-mail/i)
    expect(element).toBeInTheDocument()
  })
})
