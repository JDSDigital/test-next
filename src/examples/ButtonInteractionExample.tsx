import { Button } from '@/components/Button'
import { useState } from 'react'

export const ButtonInteractionExample = () => {
  const [showText, setShowText] = useState(false)

  const onClick = () => {
    setShowText(!showText)
  }

  return (
    <div>
      {showText && <p>Text</p>}
      <Button onClick={onClick}>Click me</Button>
    </div>
  )
}
