import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'
import { NextResponse } from 'next/server' // Next.js framework uchun kerakli import

export const GET = async (req: any) => {
  await dbConnect()
  const categories = await ProductModel.find().distinct('category')
  return NextResponse.json(categories) // Next.js javobini qaytarish
}
