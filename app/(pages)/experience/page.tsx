'use client'

import { useState } from "react"

import { data } from "./data"
import MenuList from "./menu-list"
import JobDescription from "./job-description"
import PageTitle from "app/components/page-title"
import { type ExperienceDataProps } from "./definitions"

const metadata = {
  title: 'experiences',
  description: 'Look all companies that I`ve worked',
}

export default function Page() {
  const [selectedData, setSelectedData] = useState<ExperienceDataProps | {}>(data[0]);

  const handleSelectExperience = ({ id }: { id: string }) => {
    const selected = data.find(item => item.id === id)
    setSelectedData(selected || {})
  }

  return (
    <>
      <PageTitle index="03" title={metadata.title} />
      <section className="flex flex-col lg:flex-row lg:px-8 gap-8">
        <MenuList data={data} selectedData={selectedData as ExperienceDataProps} handleClick={handleSelectExperience} />
        <JobDescription data={selectedData as ExperienceDataProps} />
      </section>
    </>
  )
}
