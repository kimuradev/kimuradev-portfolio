import Image from "next/image";
import Link from "next/link";

export default function ProjectImage({ src, url, isReverse }: { src: any, url: string, isReverse: number }) {
    return (
        <div className={`flex lg:basis-3/6 opacity-0 transition duration-300 ease-in hover:scale-110 ${isReverse ? 'transition-fadein-right' : 'transition-fadein-left'}`} style={{ animationDelay: `400ms` }}>
            <Link href={url} rel="noopener noreferrer" target="_blank" >
                <Image src={src} width={600} height={500} alt="images" />
            </Link>
        </div>
    )
}