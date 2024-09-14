import { Navbar } from "./nav";
import NavMobile from "./nav-mobile";

export function Header() {
    return (
        <>
            <div className="lg:hidden">
                <NavMobile />
            </div>
            <div className="hidden lg:block">
                <Navbar />
            </div>
        </>
    )
}