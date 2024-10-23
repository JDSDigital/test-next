import { useGetProducts } from '@/products/infrastructure/hooks/useGetProducts'
import { HomeScreenProductContainer, HomeScreenRoot } from './HomeScreen.styles'
import { ProductCard } from './ProductCard'

const HomeScreen = () => {
  const { products, isLoading } = useGetProducts({})

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <HomeScreenRoot>
      <HomeScreenProductContainer>
        {products?.map((product) => <ProductCard key={product.id} product={product} />)}
      </HomeScreenProductContainer>
    </HomeScreenRoot>
  )
}

export default HomeScreen
