import Link from "next/link"

type NavLinksProps = {
    path: string
    name: string
}

export default function NavLinks({ items, customStyle, handleClick }: { items: NavLinksProps[], customStyle?: string, handleClick?: () => void }) {
    return (
        <>
            {items.map((item, index) => (
                <Link
                    key={item.name}
                    href={item.path}
                    className={`hover:text-zinc-400 dark:hover:text-zinc-700 flex align-middle relative py-1 px-2 m-1 ${customStyle}`}
                    style={{ animationDelay: `${index}00ms` }}
                    onClick={handleClick}
                >
                    <span className='flex gap-2'><strong>0{index + 1}.</strong>{item.name}</span>
                </Link>
            ))}
        </>
    )
}