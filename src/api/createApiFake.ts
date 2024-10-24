import { createProductsRepositoryFake } from '@/products/infrastructure/repositories/ProductsRepositoryFake'
import type { Api } from './domain/Api'
import { getProducts } from '@/products/application/getProducts'
import { getProductDetail } from '@/products/application/getProductDetail'

export function createApiFake(): Api {
  const productsRepositoryFake = createProductsRepositoryFake()

  return {
    products: {
      getProducts: getProducts(productsRepositoryFake),
      getProductDetail: getProductDetail(productsRepositoryFake),
    },
  }
}
