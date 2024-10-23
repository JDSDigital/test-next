import type { ProductRepository } from '@/products/domain/ProductsRepository'

export function createProductsRepository(): ProductRepository {
  return {
    getProducts: async (params) => {
      const { products } = await fetch('/api/products', {
        method: 'POST',
        body: params,
      }).then((response) => {
        return response.json()
      })

      return products
    },
  }
}
