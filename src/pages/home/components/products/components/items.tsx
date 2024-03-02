import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface ItemProps {
  title: string
  description: string
  img: string
  imgSide: 'right' | 'left'
}

export function Item({ title, description, img, imgSide }: ItemProps) {
  return (
    <>
      {imgSide === 'left' && (
        <div className="relative flex items-center justify-center">
          <img src={img} alt="Laptop" className="h-96" />
          <Separator
            orientation="vertical"
            className="absolute right-0 -mr-2"
          />
        </div>
      )}
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <h2 className="font-title text-3xl">{title}</h2>
          <span className="mt-2 max-w-96">{description}</span>
          <div className="mt-6">
            <Button variant="link" className="p-0">
              <Link to="/">Ver ofertas</Link>
            </Button>
          </div>
        </div>
      </div>
      {imgSide === 'right' && (
        <div className="relative flex items-center justify-center">
          <Separator orientation="vertical" className="absolute left-0 -ml-2" />
          <img src={img} alt="Laptop" className="h-96" />
        </div>
      )}
    </>
  )
}
