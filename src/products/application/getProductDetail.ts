import type { GetProductDetail, ProductRepository } from '../domain/ProductsRepository'

export function getProductDetail(productsRepository: ProductRepository): GetProductDetail.Request {
  return async (params) => await productsRepository.getProductDetail(params)
}
