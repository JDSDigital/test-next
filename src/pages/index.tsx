import { ProductList as ProductListScreen } from '@/products/infrastructure/screens/ProductList'
import type { GetServerSidePropsContext } from 'next'

type ProductListProps = {
  provider?: string
}

export default function ProductList({ provider }: ProductListProps) {
  return <ProductListScreen provider={provider} />
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  return {
    props: {
      provider: query.provider ?? null,
    },
  }
}
