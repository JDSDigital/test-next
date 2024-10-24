import type { Product } from '@/products/domain/Product'
import { productsFixture } from '@/products/infrastructure/fixtures/productsFixture'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  products: Product[]
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Methods', 'POST')

  res.status(200).json({ products: productsFixture })

  return
}
