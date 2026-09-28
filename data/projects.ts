// Single source for the project list. pages/projects.vue renders it as cards and
// data/cv.ts hands the same array to the CV page's "Selected Projects" grid.
export type Project = {
  title: string
  desc: string
  stack: string[]
  tag: string
  link?: { label: string; href: string }
  note?: string
}

export const projects: Project[] = [
  {
    title: 'Ganesha Fitness - AI Personal Trainer',
    desc: 'Fitness center website with AI personal trainer providing personalized workout recommendations. Live in production.',
    stack: ['Laravel', 'Next.js', 'Tailwind CSS', 'OpenAI API', 'MySQL'],
    tag: 'Featured / Live',
    link: { label: 'ganeshafitness.id', href: 'https://ganeshafitness.id' },
  },
  {
    title: 'web3-pemilu - Blockchain Voting System',
    desc: 'Blockchain-based digital voting system with face recognition to ensure election integrity and security. TypeScript frontend connected to Solidity/Hardhat smart contracts.',
    stack: ['TypeScript', 'Solidity', 'Hardhat', 'Face API'],
    tag: 'Web3 / Blockchain',
    link: { label: 'web3-pemilu.vercel.app', href: 'https://web3-pemilu.vercel.app' },
  },
  {
    title: 'YouTube Live Chat Engine',
    desc: 'Live stream chat overlay that broadcasters run inside OBS. A Go server scrapes chat from an embedded headless browser and fans it out over a WebSocket hub to many concurrent viewers.',
    stack: ['Go', 'WebSocket', 'gRPC', 'Node.js'],
    tag: 'Real-time System',
    link: { label: 'Repo', href: 'https://github.com/dipaadipati/yt-livechat-server-go' },
  },
  {
    title: 'Moonlab CMS',
    desc: 'Modern TypeScript-based headless CMS for flexible content management, API-first with intuitive admin dashboard.',
    stack: ['TypeScript', 'Next.js', 'Tailwind', 'API'],
    tag: 'CMS Platform',
    link: { label: 'moonlab-beta.vercel.app', href: 'https://moonlab-beta.vercel.app' },
  },
  {
    title: 'Svelte CRUD',
    desc: 'Minimalist CRUD app exploring Svelte + Drizzle ORM. Focus on developer experience and performance.',
    stack: ['Svelte', 'Node.js', 'Drizzle ORM'],
    tag: 'Learning Lab',
    link: { label: 'Live', href: 'https://crud-svelte-ochre.vercel.app' },
  },
  {
    title: 'Twisted Music',
    desc: 'Music player interface referenced from YouTube Music, built to practise player state and layout.',
    stack: ['React.js', 'Vite', 'Node.js', 'Tailwind CSS'],
    tag: 'Learning Lab',
    link: { label: 'Live', href: 'https://twisted-music.vercel.app' },
  },
  {
    title: 'Instabram',
    desc: 'Instagram-style feed design built to learn Tailwind CSS: responsive timeline, stories row and profile grid.',
    stack: ['Next.js', 'React.js', 'Tailwind CSS', 'FontAwesome'],
    tag: 'Learning Lab',
    link: { label: 'Live', href: 'https://instabram.vercel.app' },
  },
  {
    title: 'Apotek Store',
    desc: 'Pharmacy sales and transaction system with scalable API-based CRUD engine.',
    stack: ['Laravel', 'Bootstrap', 'MySQL', 'REST API'],
    tag: 'Pharmacy System',
    note: 'Private',
  },
  {
    title: 'Peduli Diri',
    desc: 'Counseling platform for bullying victims with psychologists via live chat, real-time chat API.',
    stack: ['Laravel', 'Bootstrap', 'Live Chat API'],
    tag: 'Social Impact',
    note: 'Private',
  },
]
