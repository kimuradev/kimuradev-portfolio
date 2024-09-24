import { CardDataProps, ProjectProps } from "./definitions";

import SkunexusCard from 'app/assets/skunexus-card.jpg'
import BoschCard from 'app/assets/bosch-card.jpg'
import MirumCard from 'app/assets/mirum-card.jpg'
import HsbcCard from 'app/assets/hsbc-card.jpg'
import PbCard from 'app/assets/pb-card.jpg'
import BradescoCard from 'app/assets/bradesco-card.jpg'

import SkunexusImage from 'app/assets/skunexus.png'
import BoschADEImage from 'app/assets/bosch-ade.png'
import BoschIntrack from 'app/assets/bosch-intrack.png'
import UnicefImage from 'app/assets/mirum-unicef.png'
import MirumSkyImage from 'app/assets/mirum-sky.png';
import MirumJeJImage from 'app/assets/mirum-jej.png';
import MirumLosangoImage from 'app/assets/mirum-losango.png';
import HsbcImage from 'app/assets/hsbc.png'
import PbImage from 'app/assets/pb-consignado.png'
import BradescoApp from 'app/assets/bradesco-app.png'
import BradescoUnipass from 'app/assets/bradesco-unipass.png'

export const cardData: CardDataProps[] = [
    {
        id: 'skunexus',
        img: SkunexusCard,
        alt: 'Skunexus logo'
    },
    {
        id: 'bosch',
        img: BoschCard,
        alt: 'Bosch logo'
    },
    {
        id: 'mirum',
        img: MirumCard,
        alt: 'Mirum logo'
    },
    {
        id: 'pb',
        img: PbCard,
        alt: 'PB logo'
    },
    {
        id: 'bradesco',
        img: BradescoCard,
        alt: 'Bradesco logo'
    },
    {
        id: 'hsbc',
        img: HsbcCard,
        alt: 'hsbc logo'
    },
]

export const projectDetailsData: ProjectProps[] = [
    {
        id: 'skunexus',
        projects: [
            {
                projectName: 'Skunexus | Plataform',
                period: '2024',
                tags: ['React', 'Javascript', 'TypeScript', 'GraphQL', 'Storybook'],
                description: 'eCommerce Operations Management Software. SkuNexus is a fully customizable, comprehensive software suite that streamlines operations, syncs data, and optimizes your processes across all channels and locations.',
                img: SkunexusImage,
                url: "https://skunexus.com/"
            }
        ]
    },
    {
        id: 'bosch',
        projects: [
            {
                projectName: 'BOSCH | InTrack',
                period: '2022',
                tags: ['React', 'TypeScript', 'Javascript', 'Cypress', 'Storybook', 'Power BI', 'Adobe XD'],
                description: 'Logistics modules using React and TypeScript. Designed an internal component library with Storybook and implemented Power BI dashboards. ',
                img: BoschIntrack,
                url: "https://www.boschintrack.de/"
            },
            {
                projectName: 'BOSCH | ADE',
                period: '2022',
                tags: ['Angular 2', 'TypeScript', 'Javascript', 'Bootstrap'],
                description: 'Logistics system to control internal products with GPS coordination. Led front-end enhancements for better user interaction.',
                img: BoschADEImage,
                url: "https://bosch.com/"
            }
        ]
    },
    {
        id: 'pb',
        projects: [
            {
                projectName: 'Paraná Bank | PB Consignado',
                period: '2018 - 2020',
                tags: ['React', 'Next JS', 'TypeScript', 'Javascript', 'Jest', 'Cypress'],
                description: 'Led the bank’s digital transformation, developing a PWA using React. Implemented a Design System and integrated push notifications, focusing on optimizing customer experience.',
                img: PbImage,
                url: "https://pbconsignado.com.br/"
            }
        ]
    },
    {
        id: 'mirum',
        projects: [
            {
                projectName: 'Mirum Agency | UNICEF',
                period: '2018',
                tags: ['Drupal', 'PHP', 'HTML', 'Bootstrap', 'Javascript', 'React'],
                description: 'Specialized in front-end development, creating robust web architectures using Bootstrap and Foundation. Built Drupal sites and integrated React JS with GraphQL for API consumption, delivering modern, decoupled web solutions. Managed tasks with Gulp and Git.',
                img: UnicefImage,
                url: "https://www.unicef.org/"
            },
            {
                projectName: 'Mirum Agency | Sky Dealers',
                period: '2018',
                tags: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
                description: 'Built marketing campaign for Sky Dealers focused on elevating brand visibility, engaging the target audience, and driving conversions.',
                img: MirumSkyImage,
                url: "https://sky.com.br/"
            },
            {
                projectName: 'Mirum Agency | Johnson & Johnson ',
                period: '2018',
                tags: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
                description: 'Developed and executed engaging seasonal marketing campaigns for Johnson & Johnson, focusing on strategic brand promotion and customer engagement.',
                img: MirumJeJImage,
                url: "https://www.johnsonsbaby.com.br/"
            },
            {
                projectName: 'Mirum Agency | Losango',
                period: '2018',
                tags: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
                description: 'Designed and built a comprehensive marketing campaign for Losango, leveraging creative strategies to enhance brand visibility and customer engagement.',
                img: MirumLosangoImage,
                url: "https://www2.losango.com.br/"
            }
        ]
    },
    {
        id: 'bradesco',
        projects: [
            {
                projectName: 'Bradesco | Bradesco App',
                period: '2016 - 2018',
                tags: ['Android', 'iOS'],
                description: 'Mobile development with Android and iOS. Maintanance and enhancing for bank app service.',
                img: BradescoApp,
                url: "https://banco.bradesco/aplicativo-bradesco/"
            },
            {
                projectName: 'Bradesco | Unipass',
                period: '2014 - 2016',
                tags: ['Angular JS', 'Bootstrap', 'HTML', 'CSS', 'Javascript'],
                description: 'Web development to maximize your system´s identification, authentication and communication with your users',
                img: BradescoUnipass,
                url: "https://unipass.bradesco.com.br/unipass/"
            },
        ]
    },
    {
        id: 'hsbc',
        projects: [
            {
                projectName: 'HSBC | Rewards 4 miles',
                period: '2012 - 2014',
                tags: ['Java', 'JSF', 'SpringBoot', 'HTML', 'CSS', 'JUnit'],
                description: 'Full-stack development with Java and SpringBoot. Developed decoupled architectures and implemented hybrid mobile solutions, enhancing the bank’s online service platforms.',
                img: HsbcImage,
                url: "https://www.us.hsbc.com/credit-cards/rewards/"
            }
        ]
    },
    {
        id: 'ab',
        projects: [
            {
                projectName: 'AB Tennis Championship Manager',
                period: '2023 - present',
                tags: ['Next JS', 'Typescript', 'Node.js', 'Prisma ORM', 'Postgres'],
                description: 'The Championship System management is a comprehensive platform for Tennis players that encompasses scheduling matches, tracking monthly and yearly game statistics, managing ranking scores, organizing tournaments, handling financial aspects, and more.',
                img: SkunexusImage,
                url: "https://ab-tenis.vercel.app/"
            }
        ]
    },
    {
        id: 'smart_racing',
        projects: [
            {
                projectName: 'SmartRacing SIM dashboard | App',
                period: '2021',
                tags: ['Android', 'Java', 'SQLite'],
                description: 'Android application to collect data in real time: car damage, tyre wear, current speed, RPM, gear, current position, laps, fuel mix type, fuel laps and so on.',
                img: BoschIntrack,
                url: "https://smartracingapp.web.app/"
            },
        ]
    },
    {
        id: 'my_little_school',
        projects: [
            {
                projectName: 'My Little School | App',
                period: '2021 ',
                tags: ['React', 'React Native', 'Javascript'],
                description: 'A mobile app designed to help parents find nearby schools based on their location. The app features advanced filters, allowing users to search by distance, tuition fees, and class schedules, offering a personalized and efficient way to select the best educational options for their children.',
                img: BoschIntrack,
                url: "https://smartracingapp.web.app/"
            },
        ]
    },
    {
        id: 'voltage',
        projects: [
            {
                projectName: 'Voltage Calculator | App',
                period: '2020',
                tags: ['React', 'React Native', 'Javascript'],
                description: 'Led the bank’s digital transformation, developing a PWA using React. Implemented a Design System and integrated push notifications, focusing on optimizing customer experience.',
                img: PbImage,
                url: "https://pbconsignado.com.br/"
            }
        ]
    },
    {
        id: 'multiplication_table',
        projects: [
            {
                projectName: 'Learn Multiplication Table | Alexa skill',
                period: '2019',
                tags: ['Javascript'],
                description: 'This skill helps children master multiplication tables from 1 to 10 through engaging repetition. It’s designed to make learning multiplication easier and more fun, reinforcing key concepts in a simple and effective way',
                img: UnicefImage,
                url: "https://www.amazon.com.br/kimuradev-Aprenda-Tabuada/dp/B081B893K3"
            },
        ]
    },
]


export const extraCardData: CardDataProps[] = [
    {
        id: 'ab',
        img: MirumCard,
        alt: 'AB logo'
    },
    {
        id: 'smart_racing',
        img: BoschCard,
        alt: 'Smart Racing logo'
    },
    {
        id: 'my_little_school',
        img: BoschCard,
        alt: 'My Little School logo'
    },
    {
        id: 'voltage',
        img: SkunexusCard,
        alt: 'Voltage Calculator logo'
    },
    {
        id: 'multiplication_table',
        img: PbCard,
        alt: 'Alexa logo'
    },
]

export const extraProjectDetailsData: ProjectProps[] = [
    {
        id: 'ab',
        projects: [
            {
                projectName: 'AB Tennis Championship Manager',
                period: '2023 - present',
                tags: ['Next JS', 'Typescript', 'Node.js', 'Prisma ORM', 'Postgres'],
                description: 'The Championship System management is a comprehensive platform for Tennis players that encompasses scheduling matches, tracking monthly and yearly game statistics, managing ranking scores, organizing tournaments, handling financial aspects, and more.',
                img: SkunexusImage,
                url: "https://ab-tenis.vercel.app/"
            }
        ]
    },
    {
        id: 'smart_racing',
        projects: [
            {
                projectName: 'SmartRacing SIM dashboard | App',
                period: '2021 - present',
                tags: ['Android', 'Java', 'SQLite'],
                description: 'Android application to collect data in real time: car damage, tyre wear, current speed, RPM, gear, current position, laps, fuel mix type, fuel laps and so on.',
                img: BoschIntrack,
                url: "https://smartracingapp.web.app/"
            },
        ]
    },
    {
        id: 'voltage',
        projects: [
            {
                projectName: 'Voltage Calculator | App',
                period: '2018 - 2020',
                tags: ['React', 'React Native', 'Javascript'],
                description: 'Led the bank’s digital transformation, developing a PWA using React. Implemented a Design System and integrated push notifications, focusing on optimizing customer experience.',
                img: PbImage,
                url: "https://pbconsignado.com.br/"
            }
        ]
    },
    {
        id: 'multiplication_table',
        projects: [
            {
                projectName: 'Learn Multiplication Table | Alexa skill',
                period: '2018',
                tags: ['Javascript'],
                description: 'This skill helps children master multiplication tables from 1 to 10 through engaging repetition. It’s designed to make learning multiplication easier and more fun, reinforcing key concepts in a simple and effective way',
                img: UnicefImage,
                url: "https://www.amazon.com.br/kimuradev-Aprenda-Tabuada/dp/B081B893K3"
            },
        ]
    },
]