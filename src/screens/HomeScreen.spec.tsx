import { render, router, screen, userEvent } from '@/tests/app-test-utils'
import HomeScreen from './HomeScreen'

describe('HomeScreen', () => {
  it('can navigate to test screen', async () => {
    render(<HomeScreen />)

    await userEvent.click(screen.getByText('Go to test page'))

    expect(router.push).toHaveBeenCalled()
  })

  it('does not have basic accesibility issues', async () => {
    const { container } = render(<HomeScreen />)

    expect(container).toHTMLValidate()
  })
})
