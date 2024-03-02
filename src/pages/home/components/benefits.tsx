import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Benefits() {
  return (
    <div>
      {/* <h2 className="font-title text-center text-3xl font-bold">
        Why Hive Hire?
      </h2> */}
      {/* <div className="m-auto -mt-2 h-1 w-[70%] bg-secondary" /> */}
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Cost-effective Solutions</CardTitle>
            <CardDescription>
              Access high-quality technology without the upfront cost. Our
              flexible rental plans fit your budget, ensuring optimal
              operations.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Stay Agile and Competitive</CardTitle>
            <CardDescription>
              Stay competitive with flexible rental agreements. Scale up or down
              as needed, ensuring access to the latest technology.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Unmatched Support and Maintenance</CardTitle>
            <CardDescription>
              Benefit from our expert support and maintenance services. Keep
              operations running smoothly with timely repairs and maintenance
              checks.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customized Solutions for Your Business</CardTitle>
            <CardDescription>
              Get personalized rental solutions tailored to your business needs.
              Our team ensures you get the right equipment at the right price.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Focus on Growth, Not Maintenance</CardTitle>
            <CardDescription>
              Spend time growing your business, not maintaining equipment. Our
              comprehensive rental agreements include maintenance and support
              services.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Flexible Casual Rentals</CardTitle>
            <CardDescription>
              Need equipment for a short-term project or event? Our casual
              rentals offer flexibility without long-term commitments. Rent the
              equipment you need, when you need it, ensuring you&rsquo;re always
              prepared for any occasion.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
