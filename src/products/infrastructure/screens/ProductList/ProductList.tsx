import { useGetProducts } from '@/products/infrastructure/hooks/useGetProducts'
import { ProductListProductContainer, ProductListRoot } from './ProductList.styles'
import { ProductCard } from '../ProductCard'

type ProductListProps = {
  provider?: string
}

export const ProductList = ({ provider }: ProductListProps) => {
  const { products, isLoading } = useGetProducts({ provider })

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
