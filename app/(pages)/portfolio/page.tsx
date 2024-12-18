import Project from "./project"
import { cardData, extraCardData } from "./data"
import PageTitle from "app/components/page-title"

export const metadata = {
  title: 'portfolio',
  description: 'See some things I`ve built',
}

export default function Page() {
  return (
    <div className="flex flex-col grow-1 shrink-1 basis-auto gap-4 overflow-y-auto h-0 mb-8">
      <section>
        <PageTitle index="02" title={metadata.title} />
        <Project data={cardData} />
      </section>
      <section>
        <PageTitle index="02.1" title="Extra work" />
        <Project data={extraCardData}/>
      </section>
    </div>
  )
}
