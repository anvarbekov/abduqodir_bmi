import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'

export const GET = async (req: NextRequest) => {
  try {
    await dbConnect()
    const categories = await ProductModel.find().distinct('category')
    return NextResponse.json(categories)
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
