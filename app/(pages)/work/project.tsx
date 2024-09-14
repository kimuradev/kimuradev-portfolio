import Image from "next/image"
import Link from "next/link"
import { cardData } from "./data"

function Card({ id, src, alt, seconds }: { id: string, src: any, alt: string, seconds: number }) {
    return (
        <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg group opacity-0 transition-fadein-down" style={{ animationDelay: `${seconds}00ms` }}>
            <Image
                src={src}
                width={400}
                height={250}
                alt={alt}
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 group-hover:opacity-10 group-hover:scale-110"
            />
            <LearnMore id={id} />
        </div>
    )
}

function LearnMore({ id }: { id: string }) {
    return (

        <button className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 ease-ou group-hover:opacity-100 text-secondary font-bold text-xl ">
            <Link
                key={id}
                className="flex flex-col space-y-1 mb-4"
                href={`/work/${id}`}
            >
                <span className="border-solid border-1 border-primary bg-primary text-primary p-4 rounded cursor-pointer ">
                    learn more
                </span>
            </Link>
        </button >
    )
}

export default function Project() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:px-8">
                {cardData.map((item, index) => (
                    <Card id={item.id} src={item.img} alt={item.alt} seconds={index+3}/>
                ))}
            </div>
        </>
    )
}