import Link from "next/link";

export default function Logo() {
    return (
        <div className='h-10 w-10 lg:h-16 lg:w-16 -mt-4 lg:-mt-2 cursor-pointer hover:scale-110'>
            <Link href="/">
                <svg id="rounded-logo" viewBox="0 0 171 171"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="85.5" cy="85.5" r="82.5" fill="var(--fill-secondary)" stroke="var(--stroke-primary)" strokeWidth="2" strokeLinecap="round" />
                    <path
                        d="M114.195 122H91.7514V49.2727H115.189C122.244 49.2727 128.281 50.7287 133.3 53.6406C138.319 56.5289 142.166 60.6837 144.841 66.1051C147.516 71.5028 148.854 77.9659 148.854 85.4943C148.854 93.0701 147.504 99.5923 144.805 105.061C142.107 110.506 138.177 114.696 133.016 117.632C127.855 120.544 121.581 122 114.195 122ZM100.558 114.188H113.626C119.64 114.188 124.623 113.027 128.577 110.707C132.53 108.387 135.478 105.085 137.419 100.8C139.36 96.5147 140.331 91.4129 140.331 85.4943C140.331 79.6231 139.372 74.5687 137.455 70.331C135.537 66.0696 132.672 62.8026 128.861 60.5298C125.049 58.2334 120.303 57.0852 114.621 57.0852H100.558V114.188Z"
                        stroke="var(--stroke-primary)" strokeWidth="2" strokeLinecap="round" fill="var(--fill-primary)" />
                    <path
                        d="M80.7713 48L80.7713 120.727H67.5966L67.5966 87.3111H66.7088L38.3352 120.727L22.2486 120.727L50.3736 88.0923L22 48L37.8381 48L59.5355 79.179L67.5966 69.6619V48L80.7713 48Z"
                        stroke="var(--stroke-primary)" strokeWidth="2" strokeLinecap="round" fill="var(--fill-primary)" />
                </svg>
            </Link>
        </div>
    )
}