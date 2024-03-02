import { Link } from 'react-router-dom'

import logo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'

import { NavMenu } from './navigation/nav-menu'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <>
      <div className="flex items-center justify-between px-4">
        <Link to="/">
          <img src={logo} alt="Lógica" className="h-20" />
        </Link>
        <NavMenu />

        <div className="flex gap-2">
          <Button variant="ghost">Sign Up</Button>
          <Button>Sign In</Button>
        </div>
      </div>
      <Separator />
    </>
  )
}
