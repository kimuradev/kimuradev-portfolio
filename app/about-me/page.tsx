import PageTitle from "app/components/page-title"

export const metadata = {
  title: 'About Me',
  description: 'Discover who I am.',
}

export default function Page() {
  return (
    <>
      <PageTitle index="01" title={metadata.title} />
    </>
  )
}
