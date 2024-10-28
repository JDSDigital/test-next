import { Text } from '@/components/Text'
import { useGetProductDetail } from '../../hooks/useGetProductDetail'

type ProductDetailProps = {
  id: string
}

export const ProductDetail = ({ id }: ProductDetailProps) => {
  const { product } = useGetProductDetail({ id })

  if (!product) {
    return <Text>Product not found</Text>
  }

  return (
    <div>
      <Text>{product.name}</Text>
    </div>
  )
}
