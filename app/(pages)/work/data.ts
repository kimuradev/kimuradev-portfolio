import { ProjectProps } from "./definitions";

import SkunexusCard from 'app/assets/skunexus-card.jpg'
import BoschCard from 'app/assets/bosch-card.jpg'
import UnicefCard from 'app/assets/unicef-card.jpg'
import HsbcCard from 'app/assets/hsbc-card.jpg'
import PbCard from 'app/assets/pb-card.jpg'

type CardDataProps = {
    id: string, 
    img: any,
    alt: string
}

export const cardData: CardDataProps[] = [
    {
        id: 'sku',
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

export const data: ProjectProps[] = [
    {
        id: 'unicef',
        projectName: 'UNICEF',
        skils: ['Drupal', 'PHP', 'Javascript'],
        description: 'Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.'
    }
]