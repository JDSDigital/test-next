import type { ProductRepository } from '@/products/domain/ProductsRepository'
import { productsFixture } from '../fixtures/productsFixture'

export function createProductsRepositoryFake(): ProductRepository {
  return {
    getProducts: async () => productsFixture,
    getProductDetail: async ({ id }) => {
      const product = productsFixture.find((product) => product.id === id)

      if (!product) {
        throw new Error('Product not found')
      }

      return product
    },
  }
}
