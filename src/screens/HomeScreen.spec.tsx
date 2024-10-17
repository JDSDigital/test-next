import HomeScreen from './HomeScreen'
import { render } from '@testing-library/react'

describe('HomeScreen', () => {
  it('does not have basic accesibility issues', async () => {
    const { container } = render(<HomeScreen />)

    expect(container).toHTMLValidate()
  })
})
