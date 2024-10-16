import { styled } from '@/stitches.config'
import { Button } from '../components/Button'

export default function Home() {
  return (
    <Root>
      <Button variant="primary">Button 1</Button>
      <Button variant="secondary">Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
      <Button>Button 5</Button>
    </Root>
  )
}

const Root = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  gap: '28px',
})
