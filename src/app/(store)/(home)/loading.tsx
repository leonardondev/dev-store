import { Skeleton } from '@/components/skeleton'

/* Diretório (home) isola loading da home em relação a outras rotas da aplicação */
export default function HomeLoading() {
  return (
    <div className="grid sm:max-h-[816px] sm:grid-cols-6 md:grid-cols-9 grid-rows-9 sm:grid-rows-6 gap-6">
      <Skeleton className="aspect-square sm:aspect-video md:aspect-auto rounded-lg col-span-3 row-span-3 sm:col-span-6 sm:row-span-6" />
      <Skeleton className="aspect-square sm:max-h-[396px] w-full rounded-lg col-span-3 row-span-3" />
      <Skeleton className="aspect-square sm:max-h-[396px] w-full rounded-lg col-span-3 row-span-3" />
    </div>
  )
}
