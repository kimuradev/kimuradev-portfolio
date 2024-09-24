import ArrowIcon from "app/components/arrow";

export default function Description() {
    return (
        <div className="flex flex-col gap-4">
            <p className="opacity-0 transition-fadein-right" style={{ animationDelay: `300ms` }}>
                hello! I'm <strong>Kimura</strong>, and I'm passionate about crafting innovative solutions that make an impact on the web.
                my journey into web and mobile development began over <strong>10 years</strong> ago, when my curiosity for creating online experiences led me to dive deep into coding.
                fast forward to today, I have had the opportunity to work across a variety of settings, <strong>from startups to large corporations</strong>, each shaping my skills and enhancing my expertise.
            </p>
            <p className="opacity-0 transition-fadein-right" style={{ animationDelay: `400ms` }}>
                I specialize in building <strong>cutting-edge, accessible, and inclusive digital products</strong>.
                in addition to my hands-on development work, I also offer <strong>consultation services</strong>, helping businesses navigate their digital
                transformations with expert advice and technical guidance.
            </p>
            <p className="opacity-0 transition-fadein-right" style={{ animationDelay: `500ms` }}>
                recently, I’ve been diving deep into the following technologies:
            </p>
            <div className="flex gap-12 ml-4"  >
                <ul className="opacity-0 transition-fadein-right" style={{ animationDelay: `600ms` }}>
                    <li className="flex gap-2 items-center">
                        <ArrowIcon />
                        <span>React.js</span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <ArrowIcon />
                        <span>Next.js</span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <ArrowIcon />
                        <span>JavaScript (ES6+)</span>
                    </li>
                </ul>
                <ul className="opacity-0 transition-fadein-right" style={{ animationDelay: `700ms` }}>
                    <li className="flex gap-2 items-center">
                        <ArrowIcon />
                        <span>TypeScript</span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <ArrowIcon />
                        <span>GraphQL</span>
                    </li>
                    <li className="flex gap-2 items-center">
                        <ArrowIcon />
                        <span>Node.js</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}