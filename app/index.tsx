'use client'

import { Analytics } from "@vercel/analytics/react";
import { Header } from "./components/header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import { Loader } from "./components/loader";

export default function IndexPage({ children }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2500)
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <Header />
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-0 lg:px-8">
                {children}
                <Analytics />
                <SpeedInsights />
            </main>
            <Footer />
        </>
    )
}