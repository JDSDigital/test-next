import { render, screen } from '@testing-library/react'
import { ButtonInteractionExample } from './ButtonInteractionExample'
import userEvent from '@testing-library/user-event'

describe('ButtonInteractionExample', () => {
  it('does not show copy', () => {
    render(<ButtonInteractionExample />)

    expect(screen.queryByText('Text')).not.toBeInTheDocument()
  })

  it('shows copy after click', async () => {
    render(<ButtonInteractionExample />)

    expect(screen.queryByText('Text')).not.toBeInTheDocument()

    await userEvent.click(screen.getByRole('button'))

    expect(await screen.findByText(/text/i)).toBeInTheDocument()
  })
})
