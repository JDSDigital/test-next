import { styled } from '@/stitches.config'
import Link from 'next/link'

export const ProductCardRoot = styled(Link, {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid $main-300',
  padding: '12px 24px',
  borderRadius: '8px',
  gap: '12px',
  textDecoration: 'none',
})

export const ProductCardBody = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})
