'use client'

import React, { useState } from 'react';
import { navItems } from 'app/utils/constants';
import Logo from './logo';
import NavLinks from './nav-links';
import ThemeSwitchButton from './theme-switch';

type HamburguerMenuProps = {
    isOpen: boolean
    handleClick: () => void
}

const HamburguerMenu = ({ isOpen, handleClick }: HamburguerMenuProps) => {
    return (
        <button onClick={handleClick}
            className="cursor-pointer absolute top-[3px] right-0 px-8 py-8 z-100">
            <span className={`block transition-all duration-300 ease-out bg-primary
                    h-0.5 w-6 rounded-sm ${isOpen ?
                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`} >
            </span>
            <span className={`block transition-all duration-300 ease-out bg-primary
                    h-0.5 w-6 rounded-sm my-0.5 
                    ${isOpen ? 'opacity-0' : 'opacity-100'}`
            } >
            </span>
            <span className={`block transition-all duration-300 ease-out bg-primary
                h-0.5 w-6 rounded-sm ${isOpen ?
                    '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`} >
            </span>
        </button >
    )
}

function Section({ isOpen, handleClick }: { isOpen: boolean, handleClick: () => void }) {
    return (<>
        {isOpen && (
            <section className={`lg:hidden cursor-pointer pr-5 z-10 fixed w-full h-screen top-0 left-0 bg-secondary flex flex-col justify-evenly items-center`}>
                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                    <NavLinks items={navItems} handleClick={handleClick}/>
                </ul>
            </section>
        )}
    </>)
}

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-8 lg:mb-16 tracking-tight flex items-end justify-between">
            <Logo />

            <div className='mr-[40px] -mt-[2px]'>
                <ThemeSwitchButton />
            </div>
            <div>
                <HamburguerMenu isOpen={isOpen} handleClick={handleClick} />
            </div>

            <Section isOpen={isOpen} handleClick={handleClick}/>
        </div>
    )
};

export default NavMobile;