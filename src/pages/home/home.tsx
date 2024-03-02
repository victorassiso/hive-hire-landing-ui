import { Banner } from './components/banner'
import { Benefits } from './components/benefits'
import { Products } from './components/products/products'

export function Home() {
  return (
    <div className="flex  flex-col gap-28">
      <Banner />
      <Benefits />
      <Products />
    </div>
  )
}
