import { Send } from "lucide-react"

import PageTitle from "app/components/page-title"

export const metadata = {
  title: 'contact me',
  description: 'Let`s get in touch',
}

export default function Page() {
  return (
    <>
      <PageTitle index="04" title={metadata.title} />

      <section className="flex flex-col flex-1 justify-center items-center gap-4">
        <h1 className="mb-8 text-6xl lg:text-8xl font-semibold tracking-tighter opacity-0 transition-fadein-down"
          style={{ animationDelay: '500ms' }}>
          let's get in touch
        </h1>

        <h2 className='mb-4 text-xl lg:text-3xl font-semibold tracking-tighter opacity-0 transition-fadein-down text-zinc-400'
          style={{ animationDelay: '600ms' }}>
          my inbox is always open!
        </h2>

        <h3 className="mb-8 opacity-0 transition-fadein-down"
          style={{ animationDelay: '700ms' }}>
          whether you have a question or just want to say hello, I'll do my best to respond.
        </h3>

        <a
          href="mailto:kimuradev@gmail.com"
          className="flex items-center gap-2 border-solid border-1 border-primary p-2 rounded bg-primary transform transition duration-500 hover:scale-115 opacity-0 transition-fadein-down"
          style={{ animationDelay: '800ms' }}>
          <Send className="size-4 stroke-primary" />
          <span className="text-primary">send me a message</span>
        </a>
      </section>
    </>
  )
}
