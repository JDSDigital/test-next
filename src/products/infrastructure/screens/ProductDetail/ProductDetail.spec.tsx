import { render, screen } from '@/tests/app-test-utils'
import { ProductDetail } from './ProductDetail'
import { productsFixture } from '../../fixtures/productsFixture'

describe('ProductDetail', () => {
  it('shows products', async () => {
    const [product] = productsFixture

    render(<ProductDetail id={product.id} />)

    expect(await screen.findByText(product.name)).toBeInTheDocument()
  })

  it('does not have basic accesibility issues', async () => {
    const { container } = render(<ProductDetail id="1" />)

    expect(container).toHTMLValidate()
  })
})
