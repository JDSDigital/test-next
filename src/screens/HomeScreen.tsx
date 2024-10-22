import { HomeScreenRoot } from './HomeScreen.styles'
import { productsFixture } from '../products/infrastructure/fixtures/productsFixture'

const HomeScreen = () => {
  return (
    <HomeScreenRoot>
      {productsFixture.map((product) => (
        <h2 key={product.id}>{product.name}</h2>
      ))}
    </HomeScreenRoot>
  )
}

export default HomeScreen
