import { type ProjectDetailProps } from "../definitions"

function Tags({ data }: { data: string[] }) {
    return (
        <>
            {data.map(item => (
                <div key={item} className="border-solid border-1 border-primary rounded-3xl px-2 py-1 inline-block">
                    <span className="text-nowrap">{item}</span>
                </div>
            ))}
        </>
    )
}

export default function ProjectDetails({ isReverse, data }: { isReverse: number, data: ProjectDetailProps }) {
    const { projectName, period, description, tags } = data;

    return (
        <div className={`flex flex-col gap-2 lg:basis-3/6 mt-8 lg:px-8 opacity-0 ${isReverse ? 'lg:order-1 transition-fadein-left' : 'transition-fadein-right'}`}  style={{ animationDelay: `300ms` }}>
            <div>
                <h3 className="font-semibold text-3xl">{projectName}</h3>
                <hr className="flex flex-1 border-t border-gray-300 my-4" />
            </div>
            <div className="text-right mb-8">
                <p className="text-zinc-400">{period}</p>
            </div>

            <div className="mb-8">
                <span>
                    {description}
                </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
                <Tags data={tags} />
            </div>
        </div>
    )
}