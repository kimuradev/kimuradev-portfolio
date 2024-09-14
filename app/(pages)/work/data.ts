import { ProjectProps } from "./definitions";

import SkunexusCard from 'app/assets/skunexus-card.jpg'
import BoschCard from 'app/assets/bosch-card.jpg'
import UnicefCard from 'app/assets/unicef-card.jpg'
import HsbcCard from 'app/assets/hsbc-card.jpg'
import PbCard from 'app/assets/pb-card.jpg'

import SkunexusImage from 'app/assets/skunexus.png'
import BoschImage from 'app/assets/bosch.png'
import UnicefImage from 'app/assets/unicef.png'
import HsbcImage from 'app/assets/hsbc.png'
import PbImage from 'app/assets/pb-consignado.png'


type CardDataProps = {
    id: string,
    img: any,
    alt: string
}

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
        id: 'unicef',
        img: UnicefCard,
        alt: 'Unicef logo'
    },
    {
        id: 'pb',
        img: PbCard,
        alt: 'PB logo'
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
                img: SkunexusImage
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
                description: 'Logistics modules using React and TypeScript. Designed an internal component library with Storybook and implemented Power BI dashboards. Led front-end enhancements for better user interaction.',
                img: BoschImage
            }
        ]
    },
    {
        id: 'pb',
        projects: [
            {
                projectName: 'Paraná Bank | PB Consignado',
                period: '2020',
                tags: ['React', 'Next JS', 'TypeScript', 'Javascript', 'Jest', 'Cypress'],
                description: 'Led the bank’s digital transformation, developing a PWA using React. Implemented a Design System and integrated push notifications, focusing on optimizing customer experience.',
                img: PbImage
            }
        ]
    },
    {
        id: 'unicef',
        projects: [
            {
                projectName: 'Mirum Agency | UNICEF',
                period: '2018',
                tags: ['Drupal', 'PHP', 'HTML', 'Bootstrap', 'Javascript', 'React'],
                description: 'Specialized in front-end development, creating robust web architectures using Bootstrap and Foundation. Built Drupal sites and integrated React JS with GraphQL for API consumption, delivering modern, decoupled web solutions. Managed tasks with Gulp and Git.',
                img: UnicefImage
            }
        ]
    },
    {
        id: 'hsbc',
        projects: [
            {
                projectName: 'HSBC | Bradesco APP',
                period: '2016 - 2018',
                tags: ['Android', 'iOS'],
                description: 'Mobile development with Android and iOS. Maintanance and enhancing for bank app service.',
                img: HsbcImage
            },
            {
                projectName: 'HSBC | Rewards 4 miles',
                period: '2014 - 2016',
                tags: ['Java', 'JSF', 'SpringBoot', 'HTML', 'CSS', 'JUnit'],
                description: 'Full-stack development with Java and SpringBoot. Developed decoupled architectures and implemented hybrid mobile solutions, enhancing the bank’s online service platforms.',
                img: HsbcImage
            }
        ]
    }

]