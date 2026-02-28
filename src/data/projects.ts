import uptick from '../assets/modules/uptick/uptick-preview.png'
import dgh from '../assets/modules/death-game-hotel/death-game-hotel-preview.png'
import pk2 from '../assets/modules/postknight-2/postknight-2-preview.png'
import retronauts from '../assets/modules/retronauts/retronauts-preview.png'
import anatis from '../assets/modules/anatis/anatis-preview.png'
import swirly from '../assets/modules/swirly/swirly-preview.png'
import hundred from '../assets/modules/hundred/hundred-preview.png'
import relic from '../assets/modules/relic/relic-preview.png'
import recollect from '../assets/modules/recollect/recollect-preview.png'
import tide from '../assets/modules/tide/tide-preview.png'
import beans from '../assets/modules/beans-for-good/beans-for-good-preview.png'
import shackled from '../assets/modules/the-shackled/the-shackled-preview.png'
import sleepwalker from '../assets/modules/sleepwalker/sleepwalker-preview.png'
import upbeet from '../assets/modules/upbeet/upbeet-preview.png'
import drink from '../assets/modules/one-last-drink/one-last-drink-preview.png'
import greenpath from '../assets/modules/greenpath/greenpath-preview.png'
import ascension from '../assets/modules/ascension/ascension-preview.png'
import gmc from '../assets/modules/gmc/gmc-preview.png'
import twoYears from '../assets/modules/two-years/two-years-preview.png'
import santa from '../assets/modules/santa/santa.png'
import eyemageddon from '../assets/modules/eyemageddon/eyemageddon.png'

interface Project {
  title: string
  to: string
  external?: boolean
  image?: ImageMetadata
  tag?: string
  role?: string
  subtitle?: string
  team?: string
}

const work: Project[] = [
  { 
    to: 'https://www.uptickhq.com/au/',
    external: true,
    title: 'Uptick Webapp',
    tag: 'Uptick',
    role: 'Software Developer',
    subtitle: 'Aug 2024 - Feb 2026',
    image: uptick,
    team: '30+',
  },
  { 
    to: 'https://store.steampowered.com/app/3636230/Death_Game_Hotel_a_White_Owls_game/',
    external: true,
    title: 'Death Game Hotel',
    tag: 'Skeleton Crew Studio',
    role: 'Unity Programmer',
    subtitle: 'Aug 2023 - Jan 2024',
    image: dgh,
    team: '10+',
  },
  { 
    to: 'https://postknight.com/',
    external: true,
    title: 'Postknight 2',
    tag: 'Kurechii',
    role: 'Unity Programmer',
    subtitle: 'Feb 2021 - Jan 2022',
    image: pk2,
    team: '10+',
  },
]

const games: Project[] = [
  { 
    to: 'https://junyynyyn.itch.io/eyemageddon/',
    external: true,
    title: 'Eyemageddon',
    tag: 'Game Jam',
    role: 'Programmer (Godot)',
    subtitle: 'UMGMC Jam 11 (2026)',
    image: eyemageddon,
    team: '3',
  },
  { 
    to: 'https://alexander-kam.itch.io/the-people-vs-santa/',
    external: true,
    title: 'The People vs Santa',
    tag: 'Game Jam',
    role: 'Programmer (Unity)',
    subtitle: 'UMGMC Jam 8 (2025)',
    image: santa,
    team: '2',
  },
  { 
    to: 'https://codebrew-2025-frontend.onrender.com/',
    external: true,
    title: 'Retronauts',
    tag: 'Hackathon',
    role: 'Programmer (Three.js)',
    subtitle: 'Codebrew (2025)',
    image: retronauts,
    team: '4',
  },
  { 
    to: 'https://codebrew-2025-frontend.onrender.com/',
    external: true,
    title: 'Anatis',
    tag: 'Game Jam',
    role: 'Programmer (Unity)',
    subtitle: 'UMGMC Jam 7 (2025)',
    image: anatis,
    team: '1',
  },
  { 
    to: 'https://alexander-kam.itch.io/swirly-whirly/',
    external: true,
    title: 'Swirly Whirly',
    tag: 'Game Jam',
    role: 'Programmer (Bevy)',
    subtitle: 'UMGMC Jam 5 (2025)',
    image: swirly,
    team: '2',
  },
  { 
    to: 'https://alexander-kam.itch.io/a-hundred-little-guys/',
    external: true,
    title: 'A Hundred Little Guys',
    tag: 'Game Jam',
    role: 'Programmer (Godot)',
    subtitle: 'UMGMC Jam 4 (2025)',
    image: hundred,
    team: '1',
  },
  { 
    to: 'https://alexander-kam.itch.io/relic/',
    external: true,
    title: 'Relic',
    tag: 'Long Term Project',
    role: 'Programmer (Unity)',
    subtitle: 'Jul 2024 - Sep 2024',
    image: relic,
    team: '3',
  },
  { 
    to: 'https://science-gallery.onrender.com/',
    external: true,
    title: 'RE:Collect',
    tag: 'Long Term Project',
    role: 'Programmer (React)',
    subtitle: 'May 2024, August 2024',
    image: recollect,
    team: '6',
  },
  {
    to: 'https://alexander-kam.itch.io/gmtk-2024/',
    external: true,
    title: 'Tide',
    tag: 'Game Jam',
    role: 'Programmer (Godot)',
    subtitle: 'GMTK Game Jam (2024)',
    image: tide,
    team: '3',
  },
  {
    to: 'https://beans-for-good.onrender.com/',
    external: true,
    title: 'Beans for Good',
    tag: 'Hackathon',
    role: 'Programmer (React)',
    subtitle: 'Codebrew (2024)',
    image: beans,
    team: '3',
  },
  {
    to: 'https://alexander-kam.itch.io/the-shackled/',
    external: true,
    title: 'The Shackled',
    tag: 'Game Jam',
    role: 'Programmer (Unity)',
    subtitle: 'UMGMC Jam 3 (2024)',
    image: shackled,
    team: '2',
  },
  {
    to: 'https://alexander-kam.itch.io/sleepwalker/',
    external: true,
    title: 'Sleepwalker',
    tag: 'Game Jam',
    role: 'Programmer (Unity)',
    subtitle: 'UMGMC Jam 1 (2024)',
    image: sleepwalker,
    team: '3',
  },
  {
    to: 'https://alexander-kam.itch.io/upbeet/',
    external: true,
    title: 'Upbeet',
    tag: 'Game Jam',
    role: 'Programmer (Unity)',
    subtitle: 'Global Game Jam (2024)',
    image: upbeet,
    team: '3',
  },
  {
    to: 'https://alexander-kam.itch.io/one-last-drink/',
    external: true,
    title: 'One Last Drink',
    tag: 'Hackathon',
    role: 'Programmer (Unity)',
    subtitle: 'Catalyst (2022)',
    image: drink,
    team: '3',
  },
  {
    to: 'https://devpost.com/software/greenpath-vw856r/',
    external: true,
    title: 'Green Path',
    tag: 'Hackathon',
    role: 'Programmer (Javascript)',
    subtitle: 'Codebrew (2022)',
    image: greenpath,
    team: '4',
  },
  {
    to: 'https://alexander-kam.itch.io/ascension/',
    external: true,
    title: 'Ascension',
    tag: 'Long Term Project',
    role: 'Programmer (Unity)',
    subtitle: 'Jan 2022 - Sep 2022',
    image: ascension,
    team: '1',
  },
]

const experimental: Project[] = [
  { 
    to: 'https://www.gamemakersclub.org/',
    external: true,
    title: "Game Maker's Club",
    tag: 'University of Melbourne',
    role: 'President',
    subtitle: 'Oct 2023 - Sep 2025',
    image: gmc,
    team: '350+',
  },
  { 
    to: 'https://two-years-g1l1.onrender.com/',
    external: true,
    title: 'Two Years',
    tag: 'Anniversary Gift',
    role: 'Rust + Typescript',
    subtitle: 'June 2025 - July 2025',
    image: twoYears,
    team: '1',
  },
]

export { work, games, experimental }
export type { Project }
