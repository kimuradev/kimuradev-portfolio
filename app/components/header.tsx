import { Navbar } from "./nav";
import NavMobile from "./nav-mobile";

export function Header() {
    return (
        <>
            <NavMobile />
            <Navbar />
        </>
    )
}