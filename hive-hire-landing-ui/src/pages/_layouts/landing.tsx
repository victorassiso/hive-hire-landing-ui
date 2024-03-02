import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { Separator } from '@/components/ui/separator'
import { Dialog } from '@/components/ui/dialog'

export function Landing() {
  return (
    <Dialog>
      <div className="m-auto max-w-screen-2xl">
        <Header />
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
    </Dialog>
  )
}
