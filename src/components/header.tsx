import Image from 'next/image'
import Link from 'next/link'

import CardWidget from './cart-widget'
import SearchForm from './search-form'

export function Header() {
  return (
    <div className="flex items-start justify-between sm:items-center">
      <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:gap-5">
        <Link
          href="/"
          className="h-11 py-1.5 text-2xl font-extrabold text-white"
        >
          devstore
        </Link>

        <SearchForm />
      </div>
      <div className="flex h-11 items-center gap-4">
        <CardWidget />

        <div className="h-4 w-px bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/leonardondev.png"
            alt=""
            width={48}
            height={48}
            className="size-6 rounded-full"
          />
        </Link>
      </div>
    </div>
  )
}
