import { Brain, MessageSquare, TrendingUp, ShieldCheck, Zap, Database } from "lucide-react"

const features = [
  {
    name: "AI-Powered Analytics",
    description: "Get instant insights from your data using natural language queries.",
    icon: Brain,
  },
  {
    name: "Intelligent Chatbot",
    description: "Provide automated customer support with access to your company's data.",
    icon: MessageSquare,
  },
  {
    name: "Predictive Analytics",
    description: "Forecast sales trends and market changes with advanced AI models.",
    icon: TrendingUp,
  },
  {
    name: "Secure Data Handling",
    description: "Enterprise-grade security to keep your sensitive information protected.",
    icon: ShieldCheck,
  },
  {
    name: "Real-time Processing",
    description: "Get up-to-the-minute insights for timely decision making.",
    icon: Zap,
  },
  {
    name: "Seamless Integration",
    description: "Easy connection with your existing databases and systems.",
    icon: Database,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Powerful Features</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how Tarteeb AI can revolutionize your data interaction and decision-making process.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

