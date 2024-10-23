import { useApi } from '@/context/ApiContext'
import type { Product } from '@/products/domain/Product'
import type { GetProducts } from '@/products/domain/ProductsRepository'
import { useEffect, useMemo, useState } from 'react'

export const useGetProducts = (params: GetProducts.Params) => {
  const [products, setProducts] = useState<Product[] | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)

  const memoParams = useMemo(() => params, [params])

  const api = useApi()

  useEffect(() => {
    api.products
      .getProducts(memoParams)
      .then((products) => {
        setIsLoading(false)
        setProducts(products)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return { products, isLoading }
}
