import { render, screen } from '@testing-library/react'
import { FormInteractionExample } from './FormInteractionExample'
import userEvent from '@testing-library/user-event'

describe('FormInteractionExample', () => {
  it('can type user name', async () => {
    render(<FormInteractionExample />)

    const input = screen.getByLabelText(/user name/i)

    await userEvent.type(input, 'John Doe')

    expect(input).toHaveDisplayValue('John Doe')
  })

  it('can send form with user name', async () => {
    const name = 'John Doe'

    const onSubmitMock = jest.fn()
    render(<FormInteractionExample onSubmit={onSubmitMock} />)

    const input = screen.getByLabelText(/user name/i)

    await userEvent.type(input, name)
    expect(input).toHaveDisplayValue(name)
    await userEvent.click(screen.getByRole('button'))

    expect(onSubmitMock).toHaveBeenCalledWith({ name })
  })

  it('enables and disables submit button', async () => {
    const name = 'John Doe'

    render(<FormInteractionExample />)

    const input = screen.getByLabelText(/user name/i)
    const button = screen.getByRole('button')

    expect(button).toBeDisabled()

    await userEvent.type(input, name)
    expect(input).toHaveDisplayValue(name)

    expect(button).not.toBeDisabled()
  })
})
