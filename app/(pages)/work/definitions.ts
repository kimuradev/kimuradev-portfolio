export type ProjectDetailProps = {
  projectName: string,
  period: string,
  tags: string[],
  description: string
  img: any,
  url: string
}

export type ProjectProps = {
  id: string,
  projects: ProjectDetailProps[]
}
