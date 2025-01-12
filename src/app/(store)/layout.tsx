import { Header } from '@/components/header'
import { CartProvider } from '@/context/cart-context'

/* Diretório (store) isola layout interno para possibilitar outros layouts de entrada */
export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
