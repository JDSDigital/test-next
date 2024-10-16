import type { ComponentProps } from 'react'
import { ButtonRoot } from './ButtonStyles'

type ButtonOwnProps = ComponentProps<typeof ButtonRoot>

export const Button = ({ children }: ButtonOwnProps) => {
  return <ButtonRoot>{children}</ButtonRoot>
}
