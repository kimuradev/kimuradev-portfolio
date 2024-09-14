import Image from 'next/image'
import Profile from 'app/assets/profile-bw.jpg';

export default function ProfileImage() {
    return (
        <Image
            src={Profile}
            alt="Profile image"
            width={500}
            height={500}
            className="opacity-0 h-96 w-96 rounded-full border-solid border-1 border-primary transform transition duration-500 hover:scale-110 hover:opacity-100 transition-fadein-left"
            style={{ animationDelay: `600ms` }}
        />
    )
}