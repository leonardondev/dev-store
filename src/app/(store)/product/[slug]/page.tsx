export default async function Product() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div className="relative grid sm:max-h-[816px]">
      <h1>Product</h1>
    </div>
  )
}
