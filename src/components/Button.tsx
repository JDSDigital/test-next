import type { ComponentProps } from 'react'
import { ButtonRoot } from './ButtonStyles'

type ButtonOwnProps = ComponentProps<typeof ButtonRoot>
type ButtonProps = ButtonOwnProps & {
  type?: 'button' | 'submit'
  disabled?: boolean
}

export const Button = ({ type = 'button', children, disabled, ...rest }: ButtonProps) => {
  return (
    <ButtonRoot type={type} disabled={disabled} {...rest}>
      {children}
    </ButtonRoot>
  )
}
