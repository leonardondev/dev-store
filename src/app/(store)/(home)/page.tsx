import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { api } from '@/data/api'
import { Product } from '@/data/types/products'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    // cache: 'force-cache',
    // cache: 'no-store',
    next: { revalidate: 60 * 60 /* 1 hour */ },
  })
  const { featuredProducts } = await response.json()

  return featuredProducts
}

export const metadata: Metadata = {
  title: 'Home',
}

export default async function HomePage() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid grid-rows-9 gap-6 sm:max-h-[816px] sm:grid-cols-6 sm:grid-rows-6 md:grid-cols-9">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-3 row-span-3 flex aspect-square items-end justify-center overflow-hidden rounded-lg bg-zinc-900 sm:col-span-6 sm:row-span-6 sm:aspect-video md:aspect-auto"
      >
        <Image
          className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          src={highlightedProduct.image}
          width={1024}
          height={1024}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-28 left-4 right-12 flex h-12 items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 sm:max-w-[280px]">
          <span className="truncate text-sm">{highlightedProduct.title}</span>
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
            href={`/product/${product.slug}`}
            className="group relative col-span-3 row-span-3 overflow-hidden rounded-lg bg-zinc-900"
          >
            <Image
              className="aspect-square size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              src={product.image}
              width={360}
              height={360}
              quality={100}
              alt=""
            />
            <div className="absolute bottom-28 left-4 right-12 flex h-12 items-center justify-between gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 sm:bottom-10 sm:right-[4vw] sm:w-3/4 sm:max-w-[280px] lg:right-12">
              <span className="truncate text-sm">{product.title}</span>
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
