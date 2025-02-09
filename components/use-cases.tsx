import { LineChart, Users, ShoppingCart, Shield, Briefcase, TrendingUp } from "lucide-react"

const useCases = [
  {
    title: "Real-time Business Analytics",
    description: "Get instant insights on sales, revenue, and customer metrics through simple queries.",
    icon: LineChart,
  },
  {
    title: "Intelligent Customer Support",
    description: "Provide 24/7 customer support with an AI chatbot that has access to your company's knowledge base.",
    icon: Users,
  },
  {
    title: "E-commerce Optimization",
    description: "Analyze customer behavior and optimize product recommendations for increased sales.",
    icon: ShoppingCart,
  },
  {
    title: "Fraud Detection",
    description: "Identify potential fraudulent activities in real-time using AI-powered pattern recognition.",
    icon: Shield,
  },
  {
    title: "HR Analytics",
    description: "Gain insights into employee performance, satisfaction, and retention through data analysis.",
    icon: Briefcase,
  },
  {
    title: "Market Trend Analysis",
    description: "Stay ahead of market trends with AI-powered forecasting and competitor analysis.",
    icon: TrendingUp,
  },
]

export default function UseCases() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Use Cases</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how Tarteeb AI can be applied across various business functions to drive growth and efficiency.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase) => (
          <div key={useCase.title} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <useCase.icon className="h-8 w-8" />
              <h3 className="font-bold">{useCase.title}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

