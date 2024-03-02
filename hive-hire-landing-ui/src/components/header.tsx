import { Link } from 'react-router-dom'

import logo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'

import { NavMenu } from './navigation/nav-menu'
import { Separator } from './ui/separator'
import { env } from '@/env'

export function Header() {
  return (
    <>
      <div className="flex items-center justify-between px-4">
        <Link to="/">
          <img
            src={logo}
            alt="Hive Hire Rental & Consulting"
            className="h-20"
          />
        </Link>
        <NavMenu />

        <div className="flex gap-2">
          <Button>
            <Link to={env.VITE_PLATFORM_URL}>Open User Platform</Link>
          </Button>
        </div>
      </div>
      <Separator />
    </>
  )
}
