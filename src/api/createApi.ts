import { createProductsRepository } from '@/products/infrastructure/repositories/ProductsRepository'
import type { Api } from './domain/Api'
import { getProducts } from '@/products/application/getProducts'
import { createApiFake } from './createApiFake'

type CreateApiProps = {
  offline?: boolean
}

export function createApi({ offline = false }: CreateApiProps): Api {
  if (offline) return createApiFake()

  const productsRepository = createProductsRepository()

  return {
    products: {
      getProducts: getProducts(productsRepository),
    },
  }
}
