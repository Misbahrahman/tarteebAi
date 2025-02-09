import { DemoRequestModal } from "./demo-request-modal"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to transform your data interaction?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Join leading companies who use Tarteeb AI to gain instant insights, automate customer support, and make
          data-driven decisions faster than ever before.
        </p>
        <div className="mt-4">
          <DemoRequestModal />
        </div>
      </div>
    </section>
  )
}

