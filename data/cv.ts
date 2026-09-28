import { projects } from './projects'

export const cv = {
  name: 'M. Adipati Rezkya',
  role: 'Full-Stack Developer, PHP, React, Vue, Laravel, Next.js',
  summary:
    'Experienced Full-Stack Developer with 8+ years building backend engines and APIs for 50+ projects. Focused on scalable architecture, real-time systems (Go/gRPC), blockchain/web3, and intuitive frontends. Currently exploring AI integration for more personalized and efficient web products.',
  availability: 'Available for new opportunities',
  location: 'Indonesia / Remote and On-site',
  contacts: [
    { label: '+62 852 5163 2120', href: 'tel:+6285251632120' },
    { label: 'adipatirzky@gmail.com', href: 'mailto:adipatirzky@gmail.com' },
    { label: 'adipati.id', href: 'https://adipati.id' },
    { label: 'github.com/dipaadipati', href: 'https://github.com/dipaadipati' },
  ],
  stack: [
    {
      label: 'Backend and Data',
      items: ['PHP', 'Laravel', 'CodeIgniter', 'Go', 'Node.js', 'Python / Flask', 'MySQL', 'gRPC'],
    },
    {
      label: 'Frontend',
      items: ['TypeScript', 'JavaScript', 'React.js', 'Next.js', 'Vue', 'Nuxt.js', 'Svelte', 'jQuery'],
    },
    {
      label: 'Web3 and Tooling',
      items: ['Solidity', 'Hardhat', 'Drizzle ORM', 'Tailwind CSS', 'Bootstrap', 'Nginx', 'Linux'],
    },
  ],
  education: {
    school: 'STMIK Indonesia Banjarmasin',
    degree: 'B.Sc., Informatics Engineering',
    meta: 'GPA 3.40 / 2019-2023',
  },
  award: {
    title: 'LINE Creative 2018 - Chatbot Competition',
    meta: 'Student Category, Winner / Finalist, Oct 2018',
    desc: 'National creative chatbot competition organized by LINE Indonesia.',
  },
  beyondCode:
    "Passionate about solving complex problems, learning new technologies, and building products that make people's lives easier. Outside coding, enthusiastic about AI and performance optimization.",
  experience: [
    {
      role: 'Full-Stack Web Developer',
      company: 'CV. Ganesha Sukses',
      lead: 'AI-Powered Gym Application / Project-based collaboration',
      period: 'Mar 2025 - Mar 2026',
      bullets: [
        'Built end-to-end web app: Next.js (frontend), Laravel (backend), Flask (AI logic)',
        'Integrated AI features for personalized workout recommendations based on user data (OpenAI API)',
        'Implemented secure authentication and real-time progress tracking',
        'Collaborated with stakeholders to refine UX/UI for responsive design across devices',
        'Managed Linux-based cloud infrastructure and Nginx: provisioning, monitoring, performance optimization and high availability',
      ],
    },
    {
      role: 'Project-Based Web Developer',
      company: 'Mikashannn Coding',
      lead: 'Handled diverse client needs end-to-end:',
      period: 'Nov 2023 - Jan 2025',
      bullets: [
        'Developed new websites and web apps from scratch',
        'Fixed bugs and optimized existing websites',
        'Designed and implemented frontend for web apps',
      ],
    },
  ],
  projects,
  callout: {
    title: 'Complete Portfolio - Case Studies and Live Demos',
    text: 'Explore screenshots, technical details, and live links for all projects at',
    link: { label: 'adipati.id', href: 'https://adipati.id' },
  },
}
