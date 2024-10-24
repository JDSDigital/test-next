import type { Product } from '@/products/domain/Product'
import { ProductCardBody, ProductCardRoot } from './ProductCard.styles'
import { Text } from '@/components/Text'

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <ProductCardRoot href={`/products/${product.id}`}>
      <Text weight="bold" color="main-500">
        {product.provider}
      </Text>

      <ProductCardBody>
        <Text>{product.name}</Text>
        <Text weight="bold" color="success-500">
          {formatter.format(product.price)}
        </Text>
      </ProductCardBody>
    </ProductCardRoot>
  )
}
