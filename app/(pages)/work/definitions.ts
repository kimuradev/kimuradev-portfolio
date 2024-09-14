export type ProjectDetailProps = {
  projectName: string,
  period: string,
  tags: string[],
  description: string
  img: any
}

export type ProjectProps = {
  id: string,
  projects: ProjectDetailProps[]
}
