import { auth } from '@/lib/auth'
import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'

export const GET = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      {
        status: 401,
      }
    )
  }
  await dbConnect()
  const products = await ProductModel.find()
  return Response.json(products)
}) as any

export const POST = auth(async (req: any) => {
  if (!req.auth || !req.auth.user?.isAdmin) {
    return Response.json(
      { message: 'unauthorized' },
      {
        status: 401,
      }
    )
  }
  await dbConnect()
  const product = new ProductModel({
    name: 'Ochiq eshiklar kuni.',
    slug: 'newsId-' + Math.floor(Math.random() * 10),
    image: 'https://qum2khm.uz/wp-content/uploads/2024/04/10-1024x461.jpg',
    price: 0,
    category: 'Yangiliklar',
    brand: ' ',
    countInStock: 0,
    description: `Surxondaryo viloyati Qumqo’rg’on tumani 2- son kasb -hunar maktabida
    «Ochiq eshiklar» kuniga bag’ishlangan Kelajaging poydevori shiori ostida katta tadbir bo’lib o’tdi.
    Tadbirda tumandagi jami 82 ta maktab bo’lib shundan 9-sinf bitiruvchilari jami 1600-1650 ta o’quvchilar faol ishtirok etdilar.
    Tadbirda kasb -hunar maktabi faoliyati va yutuqlari o’qituvchilar tomonidan kelgan mehmonlarga tanishitirib o’tildi.
    Jumladan: O’quv audotoriya xonalari, o’quv ustaxonalari, ARM, avtotrinajyor xonalar, o’quv ustaxonalar, yotoqxona va kasb -hunar maktabida barcha shart -sharoitlar tashrif buyurgan o’quvchilarga kasb -hunar maktabi o’qituvchilar tomonidan a’lo darajada yetkazildi.
    Tadbir so’nggida mehmonlarda kelajakdagi orzu qilib yurgan kasbini egallashga keng yo’l ochilganiga guvoh bo’ldik. Kasb -hunar maktabi o’quvchilari tomonidan mehmonlarning kayfiyatiga yanada ko’tarinki kayfiyat ulashish maqsadida badiiy chiqishlar ham namoyish etildi.`,
    rating: 0,
    numReviews: 0,
  })
  try {
    await product.save()
    return Response.json(
      { message: 'Product created successfully', product },
      {
        status: 201,
      }
    )
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      }
    )
  }
}) as any
