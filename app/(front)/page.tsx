/* eslint-disable @next/next/no-img-element */
import CurrentDateTime from '@/components/currentTime/CurrentDateTime'
import ProductItem from '@/components/products/ProductItem'
import { Socials } from '@/components/socials/Socials'
import VideoSlider from '@/components/videoslider/VideoSlider'
// import data from '@/lib/data'
import productService from '@/lib/services/productService'
import { convertDocToObj } from '@/lib/utils'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'qum2khm',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Nextjs, Server components, Next auth, daisyui, zustand',
}

export default async function Home() {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()
  return (
    <>
      <div className="w-full carousel rounded-box mt-4">
        {featuredProducts.map((product, index) => (
          <div
            key={product._id}
            id={`slide-${index}`}
            className="carousel-item relative w-full"
          >
            <Link href={`/product/${product.slug}`}>
              <img src={product.banner} className="w-full" alt={product.name} />
            </Link>

            <div
              className="absolute flex justify-between transform 
               -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a
                href={`#slide-${
                  index === 0 ? featuredProducts.length - 1 : index - 1
                }`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide-${
                  index === featuredProducts.length - 1 ? 0 : index + 1
                }`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className='video__slider-box mt-5 relative z-10 rounded'>
          <VideoSlider />
          <div className='slider__info'>
            <div className='text__animtion-box'>
              <div className='text__animation'>
                <div className='anim__text'>Assalomu alaykum!</div>
                <div className='anim__text'>Qumqorgon tuman 2-son kasb-hunar maktabining</div>
                <div className='anim__text'>Rasmiy web saytiga xush kelibsiz!</div>
              </div>
            </div>
          </div>
        </div>
        <CurrentDateTime />
        <div className='mt-20'>
          <Socials />
        </div>
      <h2 className="text-2xl py-2">Eng songi yangiliklar</h2>
      <div className="">
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>
      <div className='text-center mt-5 mb-5 flex items-center justify-center gap-5 flex-wrap'>
        <Link className='history__btn' href={"/history"}>Muassasa tarixi</Link>
        <Link className='history__btn' href={"/contact"}>Xabar yuborish</Link>
      </div>
    </>
  )
}
