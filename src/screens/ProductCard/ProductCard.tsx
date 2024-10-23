import type { Product } from '@/products/domain/Product'
import { ProductCardRoot } from './ProductCard.styles'
import { Text } from '@/components/Text'

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <ProductCardRoot>
      <Text>{product.name}</Text>
    </ProductCardRoot>
  )
}
