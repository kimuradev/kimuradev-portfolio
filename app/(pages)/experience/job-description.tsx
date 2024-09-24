import ArrowIcon from "app/components/arrow"
import { type ExperienceDataProps } from "./definitions"

function Responsabilities({ data }: { data: string[] }) {
    return (
        <ul className="flex flex-col justify-center gap-2 opacity-0 transition-fadein-left" style={{ animationDelay: `500ms` }}>
            {data.map((item) => (
                <li className="flex items-center gap-4">
                    <div>
                        <ArrowIcon />
                    </div>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    )
}

export default function JobDescription({ data }: { data: ExperienceDataProps }) {
    return (
        <div className="flex flex-col flex-1">
            <div className="mb-4 opacity-0 transition-fadein-left"
            style={{ animationDelay: `400ms` }}>
                <h3 className="font-semibold text-xl">{data.jobTitle} | <strong className="text-zinc-500">{data.companyName}</strong></h3>
                <h4 className="text-zinc-400">{data.period}</h4>
            </div>
            <Responsabilities data={data.jobDescription} />
        </div>
    )
}
