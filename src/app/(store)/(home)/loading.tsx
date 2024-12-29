import { Skeleton } from '@/components/skeleton'

/* Diretório (home) isola loading da home em relação a outras rotas da aplicação */
export default function HomeLoading() {
  return (
    <div className="grid grid-rows-9 gap-6 sm:max-h-[816px] sm:grid-cols-6 sm:grid-rows-6 md:grid-cols-9">
      <Skeleton className="col-span-3 row-span-3 aspect-square rounded-lg sm:col-span-6 sm:row-span-6 sm:aspect-video md:aspect-auto" />
      <Skeleton className="col-span-3 row-span-3 aspect-square w-full rounded-lg sm:max-h-[396px]" />
      <Skeleton className="col-span-3 row-span-3 aspect-square w-full rounded-lg sm:max-h-[396px]" />
    </div>
  )
}
