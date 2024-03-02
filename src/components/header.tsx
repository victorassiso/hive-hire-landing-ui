import { Link } from 'react-router-dom'

import logo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import { env } from '@/env'

import { NavMenu } from './navigation/nav-menu'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Separator } from './ui/separator'

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
          <DialogTrigger asChild>
            <Button>Open Platform</Button>
          </DialogTrigger>
          <DialogContent className="grid grid-cols-2">
            <div className="relative flex flex-col">
              <DialogHeader>
                <DialogTitle>
                  Open as client
                  <span className="text-xs text-destructive opacity-70">
                    {' '}
                    comming soon...
                  </span>
                </DialogTitle>
                <DialogDescription>
                  <ul className="ml-4 list-disc">
                    <li>Hire new equipment</li>
                    <li>Manage hired assets</li>
                    <li>Open support tickets</li>
                    <li>And more...</li>
                  </ul>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button disabled={true}>Open as client</Button>
              </DialogFooter>
              <Separator orientation="vertical" className="absolute -right-2" />
            </div>
            <div className="flex flex-col">
              <DialogHeader>
                <DialogTitle>Open as admin</DialogTitle>
                <DialogDescription>
                  <ul className="ml-4 list-disc">
                    <li>Manage hired assets</li>
                    <li>Manage support tickets</li>
                    <li>Manage new orders</li>
                    <li>And more...</li>
                  </ul>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button>
                  <Link to={env.VITE_PLATFORM_URL}>Open as admin</Link>
                </Button>
              </DialogFooter>
            </div>
            {/* <div className='flex justify-between'>
              <div className='flex flex-col w-full items-center'>
                <DialogHeader>
                  <DialogTitle>Open as Client</DialogTitle>
                  <DialogDescription>
                    <ul className='list-disc'>
                      <li>Hire new equipment</li>
                      <li>Manage hired assets</li>
                      <li>Open support tickets</li>
                      <li>And more...</li>
                    </ul>
                  </DialogDescription>
                </DialogHeader>
                
              </div>
            <Separator orientation='vertical' />
              <div className='flex flex-col w-full items-center'>
                <DialogHeader>
                  <DialogTitle>Open as Admin</DialogTitle>
                  <DialogDescription>
                  <ul className='list-disc'>
                      <li>Manage hired assets</li>
                      <li>Manage support tickets</li>
                      <li>Manage new orders</li>
                      <li>And more...</li>
                    </ul>
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>

            <DialogFooter className='flex justify-between'>
              <div className='flex w-full justify-center flex-col'>
                <div className='flex justify-center'>
                  <Button disabled={true}>Open as client</Button>
                </div>
              </div>
              <div className='flex flex-col w-full justify-center'>
                <div className='flex justify-center'>

              <Button className='mt-4'>Open as admin</Button>
                </div>
              </div>
            </DialogFooter>
          <Separator /> */}
          </DialogContent>
        </div>
      </div>
    </>
  )
}
