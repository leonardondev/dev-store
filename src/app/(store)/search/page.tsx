import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { api } from '@/data/api'
import { Product } from '@/data/types/products'

interface searchProps {
  searchParams: Promise<{ q: string }>
  params: Promise<object>
}

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    // cache: 'force-cache',
    // cache: 'no-store',
    next: { revalidate: 60 * 60 /* 1 hour */ },
  })
  const { products } = await response.json()

  return products
}

export default async function Search({ searchParams }: searchProps) {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const { q: query } = await searchParams

  if (!query) {
    redirect('/')
  }

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative aspect-rectangle overflow-hidden rounded-lg bg-zinc-900"
            >
              <Image
                className="aspect-square size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                src={product.image}
                width={360}
                height={360}
                quality={100}
                alt=""
              />
              <div className="absolute bottom-1/10 left-4 right-12 flex h-12 items-center justify-between gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5 sm:right-[4vw] sm:w-3/4 sm:max-w-[280px] lg:right-12">
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
    </div>
  )
}
