import type { Product } from '@/products/domain/Product'
import { productsFixture } from '@/products/infrastructure/fixtures/productsFixture'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  product?: Product
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Methods', 'POST')

  const product = productsFixture.find((product) => product.id === req.query.id)

  res.status(200).json({ product })

  return
}
