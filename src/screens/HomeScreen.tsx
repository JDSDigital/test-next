import { Button } from '../components/Button'
import { HomeScreenRoot } from './HomeScreen.styles'

const HomeScreen = () => {
  return (
    <HomeScreenRoot>
      <Button variant="primary">Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
      <Button>Button 5</Button>
      <Button type="submit">Submit</Button>
    </HomeScreenRoot>
  )
}

export default HomeScreen
