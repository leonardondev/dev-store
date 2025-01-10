import { z } from 'zod'

import data from '@/app/api/data.json'

export async function GET(
  _request: Request,
  props: { params: Promise<{ slug: string }> },
) {
  const params = await props.params
  const slug = z.string().parse(params.slug)
  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 400 })
  }

  return Response.json({ product })
}
