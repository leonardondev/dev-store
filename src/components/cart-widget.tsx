'use client'

import { ShoppingBag } from 'lucide-react'

import { useCart } from '@/context/cart-context'

export default function CardWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="size-4" />
      <span className="text-sm">Cart ({items.length})</span>
    </div>
  )
}
