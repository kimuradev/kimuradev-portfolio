type NavItemProps = {
    path: string;
    name: string;
}[];

export const navItems: NavItemProps = [
    {
        path: '/about-me',
        name: 'about',
    },
    {
        path: '/portfolio',
        name: 'portofolio',
    },
    {
        path: '/experience',
        name: 'experience',
    },
    {
        path: '/contact',
        name: 'contact',
    },
];