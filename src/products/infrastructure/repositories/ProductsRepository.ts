import type { ProductRepository } from '@/products/domain/ProductsRepository'

export function createProductsRepository(): ProductRepository {
  return {
    getProducts: async (params) => {
      const { products } = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify(params),
      }).then((response) => {
        return response.json()
      })

      return products
    },

    getProductDetail: async ({ id }) => {
      const { product } = await fetch(`/api/products/${id}`, {
        method: 'POST',
      }).then((response) => {
        return response.json()
      })

      return product
    },
  }
}
