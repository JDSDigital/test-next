import type { ComponentProps } from 'react'
import { ButtonRoot } from './ButtonStyles'

type ButtonOwnProps = ComponentProps<typeof ButtonRoot>
type ButtonProps = ButtonOwnProps & {
  type?: 'button' | 'submit'
}

export const Button = ({ type = 'button', children }: ButtonProps) => {
  return <ButtonRoot type={type}>{children}</ButtonRoot>
}
