import { NavMenuLink } from './nav-menu-link'

export function NavMenu() {
  return (
    <div className="flex items-center gap-2">
      <NavMenuLink to="/about-us">About us</NavMenuLink>
      <NavMenuLink to="/solutions">Solutions</NavMenuLink>
      <NavMenuLink to="/resources">Resources</NavMenuLink>
      <NavMenuLink to="/cases">Cases</NavMenuLink>
      <NavMenuLink to="/contacts">Contacts</NavMenuLink>
    </div>
  )
}
