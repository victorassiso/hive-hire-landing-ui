import desktop from '@/assets/desktop.avif'
import notebook from '@/assets/notebook.png'
import projetor from '@/assets/projetor.avif'
import security from '@/assets/security.svg'
import server from '@/assets/server.webp'
import support from '@/assets/support.svg'

import { Item } from './components/items'

export function Products() {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-lg border-2 bg-card shadow-md">
      {/* First Row */}
      <Item
        title="Laptops"
        description="For those seeking portability and convenience."
        img={notebook}
        imgSide="left"
      />
      {/* Second Row */}
      <Item
        title="Desktops"
        description="Find the one that meets your needs."
        img={desktop}
        imgSide="right"
      />
      {/* Third Row */}
      <Item
        title="Servers"
        description="Configure your company's infrastructure your way."
        img={server}
        imgSide="left"
      />
      {/* Fourth Row */}
      <Item
        title="Projectors"
        description="A step up on events, meetings or trainings"
        img={projetor}
        imgSide="right"
      />
      {/* Fifth Row */}
      <Item
        title="Information Security"
        description="Keep your company safe with our security consulting team."
        img={security}
        imgSide="left"
      />

      {/* Fifth Row */}
      <Item
        title="Support"
        description="Let we worry about the technical issues while you keep focusing on what really metters."
        img={support}
        imgSide="right"
      />
    </div>
  )
}
