import { firebaseConfig } from '@/config/firebaseConfig'
import type { Product } from '@/products/domain/Product'
import { initializeApp } from 'firebase/app'
import type { NextApiRequest, NextApiResponse } from 'next'
import { collection, getDocs, getFirestore, query } from 'firebase/firestore'

type Data = {
  products: Product[]
}

enum FirebaseCollections {
  PRODUCTS = 'products',
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Methods', 'POST')

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  const collectionRef = collection(db, FirebaseCollections.PRODUCTS)

  const queryRef = query(collectionRef)

  const products = (await getDocs(queryRef).then((data) =>
    data.docs.map((doc) => doc.data()),
  )) as Product[]

  res.status(200).json({ products })

  return
}
