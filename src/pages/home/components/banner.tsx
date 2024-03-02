export function Banner() {
  return (
    <div className="flex h-96 flex-col items-center justify-center gap-4 rounded-lg border-2 shadow-md">
      <div className="flex max-w-screen-sm flex-col items-center justify-center gap-4">
        <p className="text-center text-xl font-semibold">
          Rent office equipment for{' '}
          <span className="underline decoration-secondary underline-offset-8">
            hassle-free maintenance and upgrades
          </span>
        </p>
        <span className="text-gray-00 text-center text-5xl font-black">
          We focus on{' '}
          <span className="text-primary">making our customers happy.</span>
        </span>
      </div>
    </div>
  )
}
