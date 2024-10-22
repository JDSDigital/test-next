import type { Product } from './Product'

export namespace GetProducts {
  export type Params = any // TODO: Type params
  export type Response = Product[]
  export type Request = (params: GetProducts.Params) => Promise<GetProducts.Response>
}

export interface ProductRepository {
  getProducts: GetProducts.Request
}
