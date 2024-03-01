import { Link } from 'react-router-dom'

import logo from '@/assets/logotype.png'
import { Button } from '@/components/ui/button'

import { NavMenu } from './navigation/nav-menu'

export function Header() {
  return (
    <div className="flex justify-between p-8">
      <Link to="/">
        <img src={logo} alt="Lógica" className="h-10" />
      </Link>
      <NavMenu />

      <div className="flex gap-2">
        <Button variant="ghost">Cadastrar-se</Button>
        <Button>Fazer Login</Button>
      </div>
    </div>
  )
}
