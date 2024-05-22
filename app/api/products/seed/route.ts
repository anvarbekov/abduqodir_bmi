import data from '@/lib/data'
import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'
import UserModel from '@/lib/models/UserModel'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  try {
    const { users, products } = data
    
    // Bazaga ulangan bo'lsangiz, bog'lanishni aniqlang
    await dbConnect()
    
    // Oldingi ma'lumotlarni o'chirib tashlang
    await UserModel.deleteMany()
    await ProductModel.deleteMany()
    
    // Yangi ma'lumotlarni bazaga joylang
    await UserModel.insertMany(users)
    await ProductModel.insertMany(products)
    
    // Agar hamma narsa to'g'ri bo'lsa, muvaffaqiyatli qaytarish
    return NextResponse.json({
      message: 'Seed muvaffaqiyatli amalga oshirildi',
      users,
      products,
    })
  } catch (error) {
    // Agar xato bo'lsa uni qaytarish
    return NextResponse.json({ error: error })
  }
}
