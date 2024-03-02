import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { cn } from '@/lib/tailwind-merge'

import { Button } from '../ui/button'

interface NavMenuLinkProps {
  to: string
  children: ReactNode
  className?: string
}
export function NavMenuLink({ to, children, className }: NavMenuLinkProps) {
  const { pathname } = useLocation()
  const isActive = pathname === to
  console.log(isActive)

  return (
    <Button variant="ghost" className="flex flex-col gap-1 p-0">
      <Link
        to={to}
        className={cn(
          'group p-4 text-muted-foreground transition duration-300',
          className,
        )}
      >
        <span className="text-muted-foreground">{children}</span>
        <div
          data-current={isActive}
          className={cn(
            'block h-0.5 max-w-0 rounded-sm bg-secondary transition-all duration-500 data-[current=true]:max-w-[80%]',
          )}
        />
      </Link>
    </Button>
  )
}
