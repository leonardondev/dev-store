'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export default function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) {
      return null
    }

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="mr-5 flex w-full max-w-80 gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700 sm:items-center"
    >
      <Search className="size-5 text-zinc-500" />
      <input
        type="text"
        name="q"
        defaultValue={query ?? ''}
        placeholder="Buscar produtos"
        className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  )
}
