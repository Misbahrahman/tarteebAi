import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "$99",
    features: ["Up to 1,000 queries per month", "Basic data integration", "Standard support", "1 user account"],
  },
  {
    name: "Pro",
    price: "$299",
    features: [
      "Up to 10,000 queries per month",
      "Advanced data integration",
      "Priority support",
      "5 user accounts",
      "Custom AI model training",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited queries",
      "Full data integration suite",
      "24/7 dedicated support",
      "Unlimited user accounts",
      "Custom AI model training",
      "On-premises deployment option",
    ],
  },
]

export default function Pricing() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Simple, Transparent Pricing</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Choose the plan that best fits your needs. All plans include a 14-day free trial.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="mb-6">
              <h3 className="font-bold text-2xl">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold">{plan.price}</p>
              <p className="text-sm text-muted-foreground">per month</p>
            </div>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full text-white">
              {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

