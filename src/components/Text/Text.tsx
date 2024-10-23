import type { ComponentProps } from 'react'
import { TextRoot } from './Text.styles'

type TextOwnProps = ComponentProps<typeof TextRoot>
type TextRoot = TextOwnProps & {}

export const Text = ({ children }: TextRoot) => {
  return <TextRoot>{children}</TextRoot>
}
