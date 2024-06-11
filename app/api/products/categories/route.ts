import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'
import { NextResponse } from 'next/server'

export const GET = async (req: any) => {
  await dbConnect()
  const categories = await ProductModel.find().distinct('category')
  return NextResponse.json(categories)
}
