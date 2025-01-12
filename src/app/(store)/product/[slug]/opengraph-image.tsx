import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

import { api } from '@/data/api'
import { Product } from '@/data/types/products'
import { env } from '@/env'

export const runtime = 'edge'

// Image metadata
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    // cache: 'force-cache',
    // cache: 'no-store',
    next: { revalidate: 60 * 60 /* 1 hour */ },
  })
  const { product } = await response.json()

  return product
}
// Image generation
export default async function OgImage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const product = await getProduct(params.slug)

  const productImageURL = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={productImageURL}
          alt={product.title}
          style={{ width: '100%' }}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}
