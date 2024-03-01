import './global.css'

import { Button } from './components/ui/button'

export function App() {
  return (
    <div className="flex w-full bg-red-300">
      <h1 className="flex text-3xl font-bold underline">Hello world!</h1>
      <Button>Click</Button>
    </div>
  )
}
