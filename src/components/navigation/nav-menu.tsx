import { NavMenuLink } from './nav-menu-link'

export function NavMenu() {
  return (
    <div className="flex items-center gap-2">
      <NavMenuLink to="/about-us">Sobre nós</NavMenuLink>
      <NavMenuLink to="/solutions">Soluções</NavMenuLink>
      <NavMenuLink to="/rentals">Alugar</NavMenuLink>
      <NavMenuLink to="/cases">Cases</NavMenuLink>
      <NavMenuLink to="/contacts">Contato</NavMenuLink>
    </div>
  )
}
