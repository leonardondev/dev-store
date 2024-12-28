import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <div className="flex items-start sm:items-center justify-between">
      <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:gap-5">
        <Link href="/" className="h-11 text-2xl font-extrabold text-white">
          devstore
        </Link>

        <form className="flex sm:items-center mr-5 w-full max-w-80 gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="w-5 h-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar produtos"
            className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>
      <div className="h-11 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          <span className="text-sm">Cart (0)</span>
        </div>

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/leonardondev.png"
            alt=""
            width={48}
            height={48}
            className="h-6 w-6 rounded-full"
          />
        </Link>
      </div>
    </div>
  )
}
