import PageTitle from "app/components/page-title";
import ProjectDetails from "./details";
import ProjectImage from "./image";
import { projectDetailsData } from "../data";
import { type ProjectDetailProps, type ProjectProps } from "../definitions";


export default function JobDetails({ params }) {
    const data: ProjectProps | undefined = projectDetailsData.find(project => project.id === params.job)

    return (
        <>
            <PageTitle title={params.job} enableBack />

            {data && data.projects.map((item: ProjectDetailProps, index) => (
                <div className="flex flex-col lg:flex-row ">
                    <ProjectDetails data={item} isReverse={index % 2} />
                    <ProjectImage src={item.img} isReverse={index % 2}/>
                </div>
            ))}
        </>
    )
}