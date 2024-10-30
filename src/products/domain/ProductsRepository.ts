import type { Product } from './Product'

export namespace GetProducts {
  export type Params = { provider?: string }
  export type Response = Product[]
  export type Request = (params: GetProducts.Params) => Promise<GetProducts.Response>
}

export namespace GetProductDetail {
  export type Params = { id: string }
  export type Response = Product
  export type Request = (params: GetProductDetail.Params) => Promise<GetProductDetail.Response>
}

export interface ProductRepository {
  getProducts: GetProducts.Request
  getProductDetail: GetProductDetail.Request
}
