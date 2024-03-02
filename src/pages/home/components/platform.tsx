import { MessagesSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function Platform() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <h2 className="font-title text-3xl">Platform</h2>
          <span className="mt-2">
            Rely on our experts to install, configure and maintain your
            equipment and I.T. infrastructure.
          </span>
          <div className="mt-6">
            <Button variant="link" className="p-0">
              <Link to="/">Ver ofertas</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <MessagesSquare color="hsl(var(--primary))" />
            <h3 className="font-title text-xl text-primary">Support Portal</h3>
          </div>
          <span className="ml-8">
            Our priority is your satisfaction. Count on an experienced support
            team throughout the allocation period.
          </span>
        </div>
      </div>
    </>
  )
}
