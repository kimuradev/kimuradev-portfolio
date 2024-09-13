function ArrowIcon() {
    return (
        <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(45)"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default function Description() {
    return (
        <div className="flex flex-col gap-4">
            <p className="opacity-0 transition-fadein-right" style={{ animationDelay: `300ms` }}>
                Hello! I'm <strong>Kimura</strong>, and I'm passionate about crafting innovative solutions that make an impact on the web.
                My journey into web and mobile development began over <strong>10 years</strong> ago, when my curiosity for creating online experiences led me to dive deep into coding.
                Fast forward to today, I have had the opportunity to work across a variety of settings, <strong>from startups to large corporations</strong>, each shaping my skills and enhancing my expertise.
            </p>
            <p className="opacity-0 transition-fadein-right" style={{ animationDelay: `400ms` }}>
                I specialize in building <strong>cutting-edge, accessible, and inclusive digital products</strong>.
                In addition to my hands-on development work, I also offer <strong>consultation services</strong>, helping businesses navigate their digital
                transformations with expert advice and technical guidance.
            </p>
            <p className="opacity-0 transition-fadein-right" style={{ animationDelay: `500ms` }}>
                Recently, I’ve been diving deep into the following technologies:
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