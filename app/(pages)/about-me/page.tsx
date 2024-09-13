import PageTitle from "app/components/page-title"
import Description from "./description"
import ProfileImage from "./profile-image"

export const metadata = {
  title: 'about me',
  description: 'discover who I am.',
}

export default function Page() {
  return (
    <>
      <PageTitle index="01" title={metadata.title} />
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-center">
        <Description />
        <ProfileImage />
      </section>
    </>
  )
}
