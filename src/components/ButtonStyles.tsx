import { styled } from '@/stitches.config'

export const ButtonRoot = styled('button', {
  width: 'fit-content',
  padding: '8px 12px',
  border: 'none',
  borderRadius: '4px',

  variants: {
    variant: {
      primary: {
        color: '$main-050',
        backgroundColor: '$main-500',
      },
      secondary: {
        color: '$main-600',
        backgroundColor: '$main-200',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})
