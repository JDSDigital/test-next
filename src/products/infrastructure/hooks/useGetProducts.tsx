import { useApi } from '@/context/ApiContext'
import type { Product } from '@/products/domain/Product'
import type { GetProducts } from '@/products/domain/ProductsRepository'
import { useEffect, useState } from 'react'

export const useGetProducts = (params: GetProducts.Params) => {
  const [products, setProducts] = useState<Product[] | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)

  const api = useApi()

  useEffect(() => {
    api.products
      .getProducts(params)
      .then((products) => {
        setIsLoading(false)
        setProducts(products)
      })
      .catch((error) => {
        console.error(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  return { products, isLoading }
}
