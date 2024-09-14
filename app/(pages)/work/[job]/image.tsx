import Image from "next/image"; 

export default function ProjectImage({ src, isReverse } : { src: any, isReverse: number} ) {
    return (
        <div className={`flex lg:basis-3/6 opacity-0 ${isReverse ? 'transition-fadein-right' : 'transition-fadein-left'}`} style={{ animationDelay: `400ms` }}>
            <Image src={src} width={600}  height={500} alt="images"/>
        </div>
    )
}