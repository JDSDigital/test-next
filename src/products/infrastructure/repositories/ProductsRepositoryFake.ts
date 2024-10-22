import type { ProductRepository } from '@/products/domain/ProductsRepository'
import { productsFixture } from '../fixtures/productsFixture'

export function createProductsRepositoryFake(): ProductRepository {
  return {
    getProducts: async () => productsFixture,
  }
}
