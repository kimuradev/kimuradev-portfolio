import { type ExperienceDataProps } from "./definitions";

type MenuListProps = {
    data: ExperienceDataProps[]
    selectedData: ExperienceDataProps
    handleClick: ({ id }: { id: string }) => void
}

export default function MenuList({ data, selectedData, handleClick }: MenuListProps) {
    return (
        <ul className="flex lg:flex-col opacity-0 transition-fadein-right overflow-auto"
        style={{ animationDelay: `300ms` }}>
            {data.map(item => (
                <li key={item.id} onClick={() => handleClick({ id: item.id })} className={`flex items-center gap-2 cursor-pointer border-b-2 lg:border-l-2 lg:border-b-0 border-zinc-400 py-2 px-4 transition duration-300 ease-in hover:bg-zinc-200 hover:border-zinc-700 ${selectedData.id === item.id ? 'nav-selected' : ''}`}>
                    <span className="text-nowrap">{item.companyName}</span>
                </li>
            )
            )}
        </ul>
    )
}
