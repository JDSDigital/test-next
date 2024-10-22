import type { GetProducts, ProductRepository } from '../domain/ProductsRepository'

export function getProducts(productsRepository: ProductRepository): GetProducts.Request {
  return async (params) => await productsRepository.getProducts(params)
}
