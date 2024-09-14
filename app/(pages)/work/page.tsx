import PageTitle from "app/components/page-title"
import Project from "./project"

export const metadata = {
  title: 'some companies',
  description: 'See some things I`ve built',
}

export default function Page() {
  return (
    <>
      <PageTitle index="03" title={metadata.title} />
      <Project />
    </>
  )
}
