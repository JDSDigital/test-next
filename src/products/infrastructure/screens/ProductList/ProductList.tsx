import { useGetProducts } from '@/products/infrastructure/hooks/useGetProducts'
import { ProductListProductContainer, ProductListRoot } from './ProductList.styles'
import { ProductCard } from '../ProductCard'

export const ProductList = () => {
  const { products, isLoading } = useGetProducts({})

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <ProductListRoot>
      <ProductListProductContainer>
        {products?.map((product) => <ProductCard key={product.id} product={product} />)}
      </ProductListProductContainer>
    </ProductListRoot>
  )
}
