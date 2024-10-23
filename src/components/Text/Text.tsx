import type { ComponentProps } from 'react'
import { TextRoot } from './Text.styles'

type TextOwnProps = ComponentProps<typeof TextRoot>
type TextRoot = TextOwnProps & {
  weight?: 'normal' | 'bold'
}

export const Text = ({ children, ...rest }: TextRoot) => {
  return <TextRoot {...rest}>{children}</TextRoot>
}
