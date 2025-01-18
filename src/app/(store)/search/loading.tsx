'use client'

import { useSearchParams } from 'next/navigation'

import { Skeleton } from '@/components/skeleton'

export default function SearchLoading() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <Skeleton className="aspect-rectangle rounded-lg" />
        <Skeleton className="aspect-rectangle rounded-lg" />
        <Skeleton className="aspect-rectangle rounded-lg" />
        <Skeleton className="aspect-rectangle rounded-lg" />
        <Skeleton className="aspect-rectangle rounded-lg" />
        <Skeleton className="aspect-rectangle rounded-lg" />
      </div>
    </div>
  )
}
