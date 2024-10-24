import { api, render, screen, waitFor } from '@/tests/app-test-utils'
import ProductList from './ProductList'
import { productsFixture } from '@/products/infrastructure/fixtures/productsFixture'

describe('ProductList', () => {
  it('calls products api on render', async () => {
    jest.spyOn(api.products, 'getProducts')

    render(<ProductList />)

    await waitFor(() => {
      expect(api.products.getProducts).toHaveBeenCalled()
    })
  })

  it('shows products', async () => {
    render(<ProductList />)

    const [product] = productsFixture

    expect(await screen.findByText(product.name)).toBeInTheDocument()
  })

  it('does not have basic accesibility issues', async () => {
    const { container } = render(<ProductList />)

    expect(container).toHTMLValidate()
  })
})
