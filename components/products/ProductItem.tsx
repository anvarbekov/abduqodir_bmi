import { Product } from '@/lib/models/ProductModel'
import Link from 'next/link'
import React from 'react'
import { format } from 'date-fns';
import { CiTimer } from "react-icons/ci";

export default function ProductItem({ product }: { product: Product }) {
   // createdAt ni formatlash
   const formattedDate = format(new Date(product.createdAt), 'yyyy-MM-dd HH:mm');
  return (
    <>
      <div className='blog__box'>
          <div className='inner__blog-box'>
              <div className="blog__image">
                <img
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-cover w-full"
                />
              </div>
              <div className="blog__info">
                  <h4 className='blog__create flex items-center gap-x-2'><span><CiTimer /></span><span>{formattedDate}</span></h4>
                  <h2 className='blog__title'>{product.name}</h2>
                  <p className='blog__description line-clamp-5'>
                  {product.description}
                  </p>
                  <button className='btn btn-warnig bg-teal-600 text-yellow-500'>
                    <Link href={`/product/${product.slug}`}>
                      Batafsil oqing
                    </Link>
                  </button>
              </div>
          </div>
      </div>
    </>
  )
}
