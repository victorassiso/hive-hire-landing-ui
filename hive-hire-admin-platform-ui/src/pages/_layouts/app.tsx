import { Separator } from '@/components/ui/separator'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
      <div className="m-auto max-w-screen-2xl">
        <h1>App Layout</h1>
        <div className="m-auto flex max-w-screen-xl flex-1 flex-col gap-4 p-8 pt-6">
          <Outlet />
        </div>
        <Separator />
        <div className="flex justify-center p-2">
          <span className="text-sm text-muted-foreground">
            Copyright © 2024 HIVE HIRE
          </span>
        </div>
      </div>
  )
}
