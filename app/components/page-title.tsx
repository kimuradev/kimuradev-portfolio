type PageTitle = {
    index: string;
    title: string;
}

export default function PageTitle({ index, title }) {
    return (
        <section className="flex gap-4 justify-center">
            <h1 className="flex text-2xl mb-8 tracking-tighter gap-2">
                <strong>{`${index}.`}</strong>
                <span>{title.toUpperCase()}</span>
            </h1>
            <hr className="flex flex-1 border-t border-gray-300 my-4" />
        </section>
    )
}