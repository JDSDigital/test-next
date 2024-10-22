import type { ProductRepository } from '@/products/domain/ProductsRepository'

export interface Api {
  products: ProductRepository
}
