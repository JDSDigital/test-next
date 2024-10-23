import { createStitches } from '@stitches/react'

export const { theme, styled, globalCss } = createStitches({
  theme: {
    colors: {
      'main-050': '#E9F2FB',
      'main-100': '#D3E6F8',
      'main-150': '#BDD9F4',
      'main-200': '#ADF9FF',
      'main-250': '#93DFFF',
      'main-300': '#7AC6FF',
      'main-350': '#61ADF7',
      'main-400': '#4793DD',
      'main-450': '#2E7AC4',
      'main-500': '#1460AA',
      'main-550': '#004791',
      'main-600': '#002D77',

      'success-100': '#F1FFFF',
      'success-150': '#D8FFEA',
      'success-200': '#BEFFD0',
      'success-250': '#A4FFB6',
      'success-300': '#8BFF9D',
      'success-350': '#72F084',
      'success-400': '#58D66A',
      'success-450': '#3FBD51',
      'success-500': '#25A337',
      'success-550': '#0CAE27',
      'success-600': '#0C8A1E',
      'success-650': '#007004',
      'success-700': '#005700',
      'success-750': '#003D00',
      'success-800': '#002400',
      'success-850': '#000A00',
    },
  },
})

export const globalStyles = globalCss({
  body: {
    margin: 0,
  },
})

export type ColorTokens = keyof typeof theme.colors
