import productService from '@/lib/services/productService';
import Link from 'next/link';
import { format } from 'date-fns';
import { CiTimer } from "react-icons/ci";

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug);
  if (!product) {
    return { title: "Product not found" };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug);
  if (!product) {
    return <div>Product not found</div>;
  }
  const formattedDate = format(new Date(product.createdAt), "yyyy-MM-dd HH:mm");
  return (
    <>
      <div className="my-2">
        <Link href="/">Ortga qaytish</Link>
      </div>
      <div className="mb-10">
        <div className="md:col-span-2">
          <img
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            className='rounded'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              Toliq tafsifi: <p>{product.description}</p>
            </li>
            <li>
              <h4 className='blog__create flex items-center gap-x-2'>
                <span><CiTimer /></span>
                <span>{formattedDate}</span>
              </h4>
            </li>
          </ul>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}
