import PageTitle from "app/components/page-title"
import Project from "./project"
import { cardData, extraCardData } from "./data"

export const metadata = {
  title: 'portfolio',
  description: 'See some things I`ve built',
}

export default function Page() {
  return (
    <>
      <section>
        <PageTitle index="03" title={metadata.title} />
        <Project data={cardData} />
      </section>
      <section className="mt-8">
        <PageTitle index="03.1" title="Extra work" />
        <Project data={extraCardData}/>
      </section>
    </>
  )
}
