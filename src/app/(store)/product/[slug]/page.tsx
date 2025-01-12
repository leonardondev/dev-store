import { Metadata } from 'next'
import Image from 'next/image'

import { api } from '@/data/api'
import { Product } from '@/data/types/products'

interface ProductProps {
  params: Promise<{
    slug: string
  }>
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    // cache: 'force-cache',
    // cache: 'no-store',
    next: { revalidate: 60 * 60 /* 1 hour */ },
  })
  const { product } = await response.json()

  return product
}

export async function generateMetadata(props: ProductProps): Promise<Metadata> {
  const params = await props.params
  const product = await getProduct(params.slug)

  return {
    title: product.title,
  }
}

export async function generateStaticParams() {
  const response = await api('/products/featured')
  const products: Product[] = await response.json()

  return products.map((product) => {
    return { slug: product.slug }
  })
}

export default async function ProductPage(props: ProductProps) {
  const params = await props.params
  const product = await getProduct(params.slug)

  return (
    <div className="grid lg:max-h-[816px] lg:grid-cols-1-lg lg:grid-rows-1">
      <div className="h-full overflow-hidden">
        <Image
          className="md:scale-110 lg:translate-y-[12.5%] lg:scale-125"
          src={product.image}
          width={1024}
          height={1024}
          quality={100}
          alt=""
        />
      </div>

      <div className="bottom-2 right-2 flex min-w-80 flex-col justify-start rounded-2xl bg-zinc-950/80 p-8 sm:fixed sm:border sm:border-zinc-800 md:max-w-lg md:px-12 lg:static lg:max-w-full lg:bg-transparent">
        <h1 className="text-3xl font-bold leading-tight lg:mt-16">
          {product.title}
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {product.price.toLocaleString('pr-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de{' '}
            {(product.price / 12).toLocaleString('pr-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>

        <button className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-500 font-semibold text-white lg:mb-16">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
