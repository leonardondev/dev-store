import { Skeleton } from '@/components/skeleton'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-5 w-60 rounded-full" />

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
