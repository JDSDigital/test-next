import { api, render, router, screen, userEvent, waitFor } from '@/tests/app-test-utils'
import { ProductList } from './ProductList'
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

  it('navigates to product detail', async () => {
    render(<ProductList />)

    const [product] = productsFixture

    const productLink = await screen.findByText(product.name)

    await userEvent.click(productLink)

    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith(
        `/products/${product.id}`,
        `/products/${product.id}`,
        { scroll: true },
      )
    })
  })

  it('does not have basic accesibility issues', async () => {
    const { container } = render(<ProductList />)

    expect(container).toHTMLValidate()
  })
})
