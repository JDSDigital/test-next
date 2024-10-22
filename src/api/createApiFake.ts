import { createProductsRepositoryFake } from '@/products/infrastructure/repositories/ProductsRepositoryFake'
import type { Api } from './domain/Api'
import { getProducts } from '@/products/application/getProducts'

export function createApiFake(): Api {
  const productsRepository = createProductsRepositoryFake()

  return {
    products: {
      getProducts: getProducts(productsRepository),
    },
  }
}
