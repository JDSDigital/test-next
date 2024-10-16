import { createStitches } from '@stitches/react'

export const { styled, globalCss } = createStitches({
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
    },
  },
})

export const globalStyles = globalCss({
  body: {
    margin: 0,
  },
})
