'use client'

import { ChevronLeft } from "lucide-react";

type PageTitleProps = {
    index?: string;
    title: string;
    enableBack?: boolean
}

export default function PageTitle({ index, title, enableBack = false }: PageTitleProps) {
    return (
        <div className="flex gap-4 justify-center items-center opacity-0 transition-fadein-right mb-8">
            {enableBack && (
                <button className="cursor-pointer hover:scale-120 hover:text-zinc-400" onClick={() => window.history.back()}>
                    <ChevronLeft className="size-6" />
                </button>
            )} 
            <h1 className="flex items-center text-2xl tracking-tighter gap-2">
                {index && <strong>{`${index}.`}</strong>}
                <span>{title.toUpperCase()}</span>
            </h1>
            <hr className="flex flex-1 border-t border-gray-300 my-4" />
        </div>
    )
}