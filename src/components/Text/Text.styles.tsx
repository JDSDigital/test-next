import { ColorTokens, styled, theme } from '@/stitches.config'

const color = Object.keys(theme.colors).reduce((acc, color) => {
  return { ...acc, [color]: { '&': { color: `$${color}` } } }
}, {}) as { [key in ColorTokens]: any }

export const TextRoot = styled('span', {
  fontFamily: 'Helvetica',
  color: '$main-600',

  variants: {
    color,
    weight: {
      normal: {
        fontWeight: '400',
      },
      bold: {
        fontWeight: '600',
      },
    },
  },
})
