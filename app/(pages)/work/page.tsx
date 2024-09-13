import PageTitle from "app/components/page-title"

export const metadata = {
  title: 'some jobs',
  description: 'See some things I`ve built',
}

export default function Page() {
  return (
    <>
      <PageTitle index="03" title={metadata.title} />
    </>
  )
}
