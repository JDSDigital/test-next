import type { Product } from '@/products/domain/Product'

export const productsFixture: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    provider: 'Endesa',
    price: 100,
  },
  {
    id: '2',
    name: 'Product 2',
    provider: 'Total Energies',
    price: 200,
  },
]
