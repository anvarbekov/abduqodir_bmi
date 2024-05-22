import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import UserModel from '@/lib/models/UserModel'
import ProductModel from '@/lib/models/ProductModel'
import data from '@/lib/data' // data obyekti qayerdan kelayotganini import qilish

export const GET = async (request: NextRequest) => {
  try {
    const { users, products } = data
    await dbConnect()

    await UserModel.deleteMany()
    await UserModel.insertMany(users)

    await ProductModel.deleteMany()
    await ProductModel.insertMany(products)

    return NextResponse.json({
      message: 'Seeded successfully',
      users,
      products,
    })
  } catch (error) {
    return NextResponse.json({ error: 'Seeding failed', details: error }, { status: 500 })
  }
}
