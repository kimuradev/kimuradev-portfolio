import Description from "./description"
import ProfileImage from "./profile-image"
import PageTitle from "app/components/page-title"

export const metadata = {
  title: 'about me',
  description: 'discover who I am.',
}

export default function Page() {
  return (
    <>
      <PageTitle index="01" title={metadata.title} />
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-4 lg:px-8 items-center">
        <Description />
        <ProfileImage />
      </section>
    </>
  )
}
