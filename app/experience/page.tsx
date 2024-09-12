import PageTitle from "app/components/page-title"

export const metadata = {
  title: 'My Experiences',
  description: 'Look all companies that I`ve worked',
}

export default function Page() {
  return (
    <>
      <PageTitle index="02" title={metadata.title} />
    </>
  )
}
