import { styled } from '@/stitches.config'

export const ProductCardRoot = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid $main-300',
  padding: '12px 24px',
  borderRadius: '8px',
  gap: '12px',
})

export const ProductCardBody = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})
