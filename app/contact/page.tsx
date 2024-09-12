import PageTitle from "app/components/page-title"

export const metadata = {
  title: 'Contact me',
  description: 'Let`s get in touch',
}

export default function Page() {
  return (
    <>
      <PageTitle index="04" title={metadata.title} />
    </>
  )
}
