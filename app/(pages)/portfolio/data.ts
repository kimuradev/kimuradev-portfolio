import { CardDataProps, ProjectProps } from './definitions'

import PbCard from 'app/assets/pb-card.jpg'
import HsbcCard from 'app/assets/hsbc-card.jpg'
import BoschCard from 'app/assets/bosch-card.jpg'
import MirumCard from 'app/assets/mirum-card.jpg'
import ABCard from 'app/assets/ab-tenis-card.jpg'
import VoltageCard from 'app/assets/voltage-card.jpg'
import SkunexusCard from 'app/assets/skunexus-card.jpg'
import BradescoCard from 'app/assets/bradesco-card.jpg'
import SuperOitoCard from 'app/assets/super-oito-card.jpg'
import TriplannerCard from 'app/assets/triplanner-card.jpg'
import SmartRacingCard from 'app/assets/smart-racing-card.jpg'
import MyLittleSchoolCard from 'app/assets/minha-escolinha-card.jpg'
import MultiplicationCard from 'app/assets/multiplication-card.jpg'

import HsbcImage from 'app/assets/hsbc.png'
import ABImage from 'app/assets/ab-tenis-app.png'
import PbImage from 'app/assets/pb-consignado.png'
import SuperOitoImage from 'app/assets/super-oito-app.png'
import SkunexusImage from 'app/assets/skunexus.png'
import BoschADEImage from 'app/assets/bosch-ade.png'
import MirumSkyImage from 'app/assets/mirum-sky.png'
import MirumJeJImage from 'app/assets/mirum-jej.png'
import VoltageImage from 'app/assets/voltage-app.png'
import BradescoApp from 'app/assets/bradesco-app.png'
import UnicefImage from 'app/assets/mirum-unicef.png'
import BoschIntrack from 'app/assets/bosch-intrack.png'
import TriplannerImage from 'app/assets/triplanner-app.png'
import MirumLosangoImage from 'app/assets/mirum-losango.png'
import BradescoUnipass from 'app/assets/bradesco-unipass.png'
import SmartRacingImage from 'app/assets/smart-racing-app.png'
import MultiplicationImage from 'app/assets/multiplication-app.png'
import MyLittleSchoolImage from 'app/assets/minha-escolinha-app.png'

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
  }
]

export const projectDetailsData: ProjectProps[] = [
  {
    id: 'skunexus',
    projects: [
      {
        projectName: 'Skunexus | Plataform',
        period: '2024',
        tags: ['React', 'Javascript', 'TypeScript', 'GraphQL', 'Storybook'],
        description:
          'eCommerce Operations Management Software. SkuNexus is a fully customizable, comprehensive software suite that streamlines operations, syncs data, and optimizes your processes across all channels and locations.',
        img: SkunexusImage,
        url: 'https://skunexus.com/'
      }
    ]
  },
  {
    id: 'bosch',
    projects: [
      {
        projectName: 'BOSCH | InTrack',
        period: '2022',
        tags: [
          'React',
          'TypeScript',
          'Javascript',
          'Cypress',
          'Storybook',
          'Power BI',
          'Adobe XD'
        ],
        description:
          'Logistics modules using React and TypeScript. Designed an internal component library with Storybook and implemented Power BI dashboards. ',
        img: BoschIntrack,
        url: 'https://www.boschintrack.de/'
      },
      {
        projectName: 'BOSCH | ADE',
        period: '2022',
        tags: ['Angular 2', 'TypeScript', 'Javascript', 'Bootstrap'],
        description:
          'Logistics system to control internal products with GPS coordination. Led front-end enhancements for better user interaction.',
        img: BoschADEImage,
        url: 'https://bosch.com/'
      }
    ]
  },
  {
    id: 'pb',
    projects: [
      {
        projectName: 'Paraná Bank | PB Consignado',
        period: '2018 - 2020',
        tags: [
          'React',
          'Next JS',
          'TypeScript',
          'Javascript',
          'Jest',
          'Cypress'
        ],
        description:
          'Led the bank’s digital transformation, developing a PWA using React. Implemented a Design System and integrated push notifications, focusing on optimizing customer experience.',
        img: PbImage,
        url: 'https://pbconsignado.com.br/'
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
        description:
          'Specialized in front-end development, creating robust web architectures using Bootstrap and Foundation. Built Drupal sites and integrated React JS with GraphQL for API consumption, delivering modern, decoupled web solutions. Managed tasks with Gulp and Git.',
        img: UnicefImage,
        url: 'https://www.unicef.org/'
      },
      {
        projectName: 'Mirum Agency | Sky Dealers',
        period: '2018',
        tags: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        description:
          'Built marketing campaign for Sky Dealers focused on elevating brand visibility, engaging the target audience, and driving conversions.',
        img: MirumSkyImage,
        url: 'https://sky.com.br/'
      },
      {
        projectName: 'Mirum Agency | Johnson & Johnson ',
        period: '2018',
        tags: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        description:
          'Developed and executed engaging seasonal marketing campaigns for Johnson & Johnson, focusing on strategic brand promotion and customer engagement.',
        img: MirumJeJImage,
        url: 'https://www.johnsonsbaby.com.br/'
      },
      {
        projectName: 'Mirum Agency | Losango',
        period: '2018',
        tags: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
        description:
          'Designed and built a comprehensive marketing campaign for Losango, leveraging creative strategies to enhance brand visibility and customer engagement.',
        img: MirumLosangoImage,
        url: 'https://www2.losango.com.br/'
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
        description:
          'Mobile development with Android and iOS. Maintanance and enhancing for bank app service.',
        img: BradescoApp,
        url: 'https://banco.bradesco/aplicativo-bradesco/'
      },
      {
        projectName: 'Bradesco | Unipass',
        period: '2014 - 2016',
        tags: ['Angular JS', 'Bootstrap', 'HTML', 'CSS', 'Javascript'],
        description:
          'Web development to maximize your system´s identification, authentication and communication with your users',
        img: BradescoUnipass,
        url: 'https://unipass.bradesco.com.br/unipass/'
      }
    ]
  },
  {
    id: 'hsbc',
    projects: [
      {
        projectName: 'HSBC | Rewards 4 miles',
        period: '2012 - 2014',
        tags: ['Java', 'JSF', 'SpringBoot', 'HTML', 'CSS', 'JUnit'],
        description:
          'Full-stack development with Java and SpringBoot. Developed decoupled architectures and implemented hybrid mobile solutions, enhancing the bank’s online service platforms.',
        img: HsbcImage,
        url: 'https://www.us.hsbc.com/credit-cards/rewards/'
      }
    ]
  },
  {
    id: 'superoito',
    projects: [
      {
        projectName: 'Super Oito App',
        period: '2025 - present',
        tags: [
          'Next JS',
          'Typescript',
          'Prisma ORM',
          'Postgres'
        ],
        description:
          'Super Oito is a web application designed for organizing beach tennis tournaments with up to 8 doubles teams. It streamlines match scheduling, score tracking, and rankings, making tournament management effortless and efficient. ',
        img: SuperOitoImage,
        url: 'https://superoito.app'
      }
    ]
  },
  {
    id: 'triplanner',
    projects: [
      {
        projectName: 'Triplanner App',
        period: '2024 - present',
        tags: [
          'React Native',
          'Typescript',
          'Node.js',
          'Drizzle ORM',
          'SQLite'
        ],
        description:
          'Triplanner is your personal travel assistant that helps you organize every detail of your trips. Easily add your travel destinations, and plan out your activities day by day. The app ensures an intuitive and seamless experience for managing travel itineraries, enhancing the overall travel experience.',
        img: TriplannerImage,
        url: 'https://play.google.com/store/apps/details?id=com.kimuradev.triplanner&hl=pt_BR'
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
        description:
          'The Championship System management is a comprehensive platform for Tennis players that encompasses scheduling matches, tracking monthly and yearly game statistics, managing ranking scores, organizing tournaments, handling financial aspects, and more.',
        img: ABImage,
        url: 'https://ab-tenis.vercel.app/'
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
        description:
          'Android application to collect data in real time: car damage, tyre wear, current speed, RPM, gear, current position, laps, fuel mix type, fuel laps and so on.',
        img: SmartRacingImage,
        url: 'https://smartracingapp.web.app/'
      }
    ]
  },
  {
    id: 'my_little_school',
    projects: [
      {
        projectName: 'My Little School | App',
        period: '2021 ',
        tags: ['React', 'React Native', 'Javascript', 'Node.js', 'Mongo DB'],
        description:
          'A mobile app designed to help parents find nearby schools based on their location. The app features advanced filters, allowing users to search by distance, tuition fees, and class schedules, offering a personalized and efficient way to select the best educational options for their children.',
        img: MyLittleSchoolImage,
        url: 'https://www.facebook.com/minhaescolinha'
      }
    ]
  },
  {
    id: 'voltage',
    projects: [
      {
        projectName: 'Voltage Divider Calculator | App',
        period: '2020',
        tags: ['React', 'React Native', 'Javascript'],
        description:
          'An application designed to calculate input and output voltages across resistors, as well as different voltage levels in electrical circuits. This tool simplifies the process of determining voltage drops, making it easier for users to analyze and design circuits efficiently.',
        img: VoltageImage,
        url: 'https://play.google.com/store/apps/details?id=com.voltagecalcrn'
      }
    ]
  },
  {
    id: 'multiplication_table',
    projects: [
      {
        projectName: 'Learn Multiplication Table | Alexa skill',
        period: '2019',
        tags: ['Javascript', 'Alexa skill'],
        description:
          'This skill helps children master multiplication tables from 1 to 10 through engaging repetition. It’s designed to make learning multiplication easier and more fun, reinforcing key concepts in a simple and effective way',
        img: MultiplicationImage,
        url: 'https://www.amazon.com.br/kimuradev-Aprenda-Tabuada/dp/B081B893K3'
      }
    ]
  }
]

export const extraCardData: CardDataProps[] = [
  {
    id: 'superoito',
    img: SuperOitoCard,
    alt: 'Super Oito logo'
  },
  {
    id: 'triplanner',
    img: TriplannerCard,
    alt: 'Alexa logo'
  },
  {
    id: 'ab',
    img: ABCard,
    alt: 'AB logo'
  },
  {
    id: 'smart_racing',
    img: SmartRacingCard,
    alt: 'Smart Racing logo'
  },
  {
    id: 'my_little_school',
    img: MyLittleSchoolCard,
    alt: 'My Little School logo'
  },
  {
    id: 'voltage',
    img: VoltageCard,
    alt: 'Voltage Calculator logo'
  },
  {
    id: 'multiplication_table',
    img: MultiplicationCard,
    alt: 'Alexa logo'
  }
]
