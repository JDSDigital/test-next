import { useApi } from '@/context/ApiContext'
import type { Product } from '@/products/domain/Product'
import type { GetProductDetail } from '@/products/domain/ProductsRepository'
import { useEffect, useMemo, useState } from 'react'

export const useGetProductDetail = (params: GetProductDetail.Params) => {
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)

  const memoParams = useMemo(() => params, [params])

  const api = useApi()

  useEffect(() => {
    api.products
      .getProductDetail(memoParams)
      .then((products) => {
        setIsLoading(false)
        setProduct(products)
      })
      .catch((error) => {
        console.error(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { product, isLoading }
}
