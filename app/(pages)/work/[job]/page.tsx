import PageTitle from "app/components/page-title";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function JobDetails({ params }) {

    return (
        <>
            <PageTitle title={params.job} enableBack />
        </>
    )
}