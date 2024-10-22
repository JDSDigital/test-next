import { api, render, screen, waitFor } from '@/tests/app-test-utils'
import HomeScreen from './HomeScreen'
import { productsFixture } from '@/products/infrastructure/fixtures/productsFixture'

describe('HomeScreen', () => {
  it('calls products api on render', async () => {
    jest.spyOn(api.products, 'getProducts')

    render(<HomeScreen />)

    await waitFor(() => {
      expect(api.products.getProducts).toHaveBeenCalled()
    })
  })

  it('shows products', async () => {
    render(<HomeScreen />)

    const [product] = productsFixture

    expect(await screen.findByText(product.name)).toBeInTheDocument()
  })

  it('does not have basic accesibility issues', async () => {
    const { container } = render(<HomeScreen />)

    expect(container).toHTMLValidate()
  })
})
