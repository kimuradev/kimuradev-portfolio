function Skills () {
    return (
        <div>Tag 1</div>
    )
}

export default function Project() {
    return (
        <div className="border-solid border-1 rounded border-primary p-4 bg-zinc-100 dark:bg-zinc-700 lg:max-w-xl">
            <h3 className="font-semibold">featured Project </h3>
            <h4 className="font-bold text-3xl"> Project title </h4>

            <span>
            Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.
            </span>

            <Skills />

            <button>Visit</button>
        </div>
    )
}