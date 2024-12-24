import { Header } from '@/components/header'

/* Diretório (store) isola layout interno para possibilitar outros layouts de entrada */
export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
