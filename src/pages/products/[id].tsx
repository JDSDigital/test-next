import { ProductDetail as ProductDetailScreen } from '@/products/infrastructure/screens/ProductDetail'
import type { GetServerSidePropsContext } from 'next'
import { notFound } from 'next/navigation'

type ProductDetailProps = {
  id: string
}

export default function ProductDetail({ id }: ProductDetailProps) {
  return <ProductDetailScreen id={id} />
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const id = query.id

  if (!id) {
    notFound()
  }

  return {
    props: { id },
  }
}
