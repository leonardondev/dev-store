import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="grid sm:max-h-[860px] sm:grid-cols-6 md:grid-cols-9 grid-rows-9 sm:grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 sm:col-span-6 sm:row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          src="/moletom-never-stop-learning.png"
          width={720}
          height={720}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-28 right-12 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="w-full h-full object-cover object-top aspect-square group-hover:scale-105 transition-transform duration-500"
          src="/moletom-ai-side.png"
          width={360}
          height={360}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-28 right-12 sm:bottom-10 sm:right-[4vw] lg:right-12 h-12 flex items-center gap-2 max-w-[280px] sm:w-3/4 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$99
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="w-full h-full object-cover object-top aspect-square group-hover:scale-105 transition-transform duration-500"
          src="/camiseta-dowhile-2022.png"
          width={360}
          height={360}
          quality={100}
          alt=""
        />
        <div className="absolute bottom-28 right-12 sm:bottom-10 sm:right-[4vw] lg:right-12 h-12 flex items-center gap-2 max-w-[280px] sm:w-3/4 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$69
          </span>
        </div>
      </Link>
    </div>
  )
}
