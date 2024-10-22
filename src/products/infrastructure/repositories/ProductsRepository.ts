import type { ProductRepository } from '@/products/domain/ProductsRepository'
import { productsFixture } from '../fixtures/productsFixture'

// TODO: Change implementation to fetch api
export function createProductsRepository(): ProductRepository {
  return {
    getProducts: async () => productsFixture,
  }
}
