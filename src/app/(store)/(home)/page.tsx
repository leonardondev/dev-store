import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured')
  const { featuredProducts } = await response.json()

  return featuredProducts
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid sm:max-h-[860px] sm:grid-cols-6 md:grid-cols-9 grid-rows-9 sm:grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-3 row-span-3 sm:col-span-6 sm:row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          src={highlightedProduct.image}
          width={720}
          height={720}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-28 right-12 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pr-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>
      {otherProducts.map((product) => {
        return (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden"
          >
            <Image
              className="w-full h-full object-cover object-top aspect-square group-hover:scale-105 transition-transform duration-500"
              src={product.image}
              width={360}
              height={360}
              quality={100}
              alt=""
            />
            <div className="absolute bottom-28 right-12 sm:bottom-10 sm:right-[4vw] lg:right-12 h-12 flex items-center justify-between gap-2 max-w-[280px] sm:w-3/4 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pr-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
