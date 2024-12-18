import ProjectImage from "./image";
import ProjectDetails from "./details";
import { projectDetailsData } from "../data";
import PageTitle from "app/components/page-title";
import { type ProjectDetailProps, type ProjectProps } from "../definitions";

export default function JobDetails({ params }) {
    const data: ProjectProps | undefined = projectDetailsData.find(project => project.id === params.job)

    return (
        <>
            <PageTitle title={params.job} enableBack />

            {data && data.projects.map((item: ProjectDetailProps, index) => (
                <div key={item.projectName} className="flex flex-col lg:flex-row ">
                    <ProjectDetails data={item} isReverse={index % 2} />
                    <ProjectImage src={item.img} url={item.url} isReverse={index % 2}/>
                </div>
            ))}
        </>
    )
}