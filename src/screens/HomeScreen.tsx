import { useGetProducts } from '@/products/infrastructure/hooks/useGetProducts'
import { HomeScreenRoot } from './HomeScreen.styles'

const HomeScreen = () => {
  const { products, isLoading } = useGetProducts({})

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <HomeScreenRoot>
      {products?.map((product) => <h2 key={product.id}>{product.name}</h2>)}
    </HomeScreenRoot>
  )
}

export default HomeScreen
