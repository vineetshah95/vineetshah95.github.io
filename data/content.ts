// All page copy lives here, so content edits never touch the components.

export const profile = {
  first: 'Vineet',
  last: 'Shah',
  title: 'Senior Software Engineer',
  tagline: 'Backend systems · Full stack · Problem solver',
  stack: 'Java · Spring Boot · AWS · Kubernetes · React · Angular',
  openTo: 'Software Engineer, Senior and Full Stack roles',
  email: 'shahvineet95@gmail.com',
  github: { href: 'https://github.com/vineetshah95', label: 'github.com/vineetshah95' },
  linkedin: { href: 'https://linkedin.com/in/vineetshah95', label: 'in/vineetshah95' },
};

export const sections = [
  { id: 'summary', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const summary =
  "I'm a software engineer in the Boston area, and my work spans front-end apps, backend services and cloud infrastructure. At SS&C Intralinks I build the services behind a secure document platform. Before that I built Angular features at Autodesk and healthcare and nonprofit apps at April Innovations. I approach work from the whole stack: the person using a feature, the API behind it and the systems that keep it running. What I enjoy most is taking on a meaningful problem and seeing the difference once it ships.";

export type Rung = { title: string; dates: string; bullets: string[] };
export type Role = {
  id: string;
  company: string;
  href: string;
  place: string;
  dates: string;
  title?: string;
  rungs?: Rung[];
  bullets?: string[];
  tags: string[];
};

export const roles: Role[] = [
  {
    id: 'r-ssc',
    company: 'SS&C Technologies · Intralinks',
    href: 'https://www.intralinks.com',
    place: 'Waltham, MA',
    dates: 'Jun 2022 – Oct 2026',
    rungs: [
      {
        title: 'Senior Software Engineer',
        dates: 'Apr 2026 – Oct 2026',
        bullets: [
          'Design and build Java and Spring Boot microservices and REST APIs for enterprise customers, with a focus on reliability, performance and security.',
          'Lead the migration of legacy content services to a next-generation microservices platform, including OS, JDK and build-system upgrades.',
          'Built the build and deployment setup for new file, content and management services, shipped as containers through CI/CD.',
          'Run containerized services on Kubernetes and AWS with Docker, Helm and Nginx, monitored through Grafana.',
          'Built a document watermarking service for the data room platform, with rights management, virus scanning and threat modeling.',
          'Troubleshoot production issues across application code, databases and infrastructure to keep customers unaffected.',
        ],
      },
      {
        title: 'Software Engineer',
        dates: 'Jun 2022 – Apr 2026',
        bullets: [
          'Built performance tests for high-volume bulk file downloads and optimized the workflow to raise throughput and cut timeouts.',
          'Developed secure, scalable Spring Boot microservices and REST APIs with automated testing.',
          'Contributed to database modernization, JDK and build upgrades, CI/CD automation and application-security work.',
          'Implemented LDAP integration for enterprise authentication and access control.',
          'Served as Scrum Master for 10+ sprints, onboarded new engineers and coordinated incident response.',
        ],
      },
    ],
    tags: ['Java', 'Spring Boot', 'Microservices', 'Redis', 'Kubernetes', 'AWS', 'Docker', 'Helm', 'CI/CD', 'LDAP'],
  },
  {
    id: 'r-autodesk',
    company: 'Autodesk',
    href: 'https://www.autodesk.com',
    place: 'Boston, MA',
    dates: 'May 2021 – Dec 2021',
    title: 'Software Developer Intern',
    bullets: [
      'Built reusable Angular and TypeScript components and role-based views with edit and view permissions for sensitive data.',
      'Added unit and integration tests to Node.js APIs, plus Cypress end-to-end tests that reduced user-reported bugs.',
    ],
    tags: ['Angular', 'TypeScript', 'Node.js', 'Cypress'],
  },
  {
    id: 'r-april',
    company: 'April Innovations',
    href: 'https://aprilinnovations.com/',
    place: 'Mumbai, India',
    dates: 'Sep 2018 – Sep 2019',
    title: 'Full Stack Developer',
    bullets: [
      'Replaced error-prone Excel data entry with a MongoDB data platform for a large dataset.',
      'Built MEAN-stack APIs for a doctor–patient platform with dynamic questionnaires and appointment scheduling.',
      'Designed the UI and integrated online payments for a nonprofit site where contributors find events and donate.',
    ],
    tags: ['MongoDB', 'MEAN stack'],
  },
];

export type Project = {
  name: string;
  href?: string;
  why: string;
  what: string;
  year: string;
  flow?: string[];
  shot?: { src: string; alt: string; width: number; height: number };
  tags: string[];
};

export const projects: Project[] = [
  {
    name: 'Concert Ticket Tracker',
    why: 'Resale prices change all day. I wanted to know the moment a good seat got cheap.',
    what: 'A Python tool that checks StubHub and SeatGeek for the shows I care about, scores every listing on price and seat quality using venue-specific section rules, remembers what it saw last time, and emails me only when something meaningful changes.',
    year: '2026',
    flow: ['watch list', 'StubHub + SeatGeek', 'deal score', 'price memory', 'email alert'],
    tags: ['Python', 'web scraping', 'scoring', 'alerts'],
  },
  {
    name: 'Birthday Card Helper',
    href: 'https://github.com/vineetshah95/Card-creater',
    why: "Writing a birthday message for someone you love shouldn't take twenty minutes.",
    what: "A React app that drafts cards from a name, an age and a few hobbies. Pick the tone and relationship, choose a theme, then export it as an image or PDF. There's confetti, and yes, it works for pets too.",
    year: '2026',
    shot: {
      src: '/img/card-helper.jpg',
      alt: 'Birthday Card Helper showing the card form and a generated birthday card for Maya',
      width: 1100,
      height: 690,
    },
    tags: ['React', 'TypeScript', 'Vite'],
  },
  {
    name: 'Health Plan API',
    why: 'What does a production-shaped API look like when you build every layer yourself?',
    what: 'A Spring Boot REST API that validates nested health insurance plans against a JSON schema, stores them in Redis, supports conditional updates, sits behind OAuth2, and indexes everything into Elasticsearch through a queue.',
    year: '2021 · grad school',
    flow: ['REST request', 'OAuth2', 'schema check', 'Redis', 'queue', 'Elasticsearch'],
    tags: ['Spring Boot', 'Redis', 'Elasticsearch', 'OAuth2'],
  },
  {
    name: 'Trackerz',
    href: 'https://github.com/vineetshah95/WebDesign',
    why: 'A job hunt deserves a better system than a spreadsheet.',
    what: 'A full-stack job application tracker with an Angular front end and an Express and MongoDB back end, including sign-in, file uploads and email reminders.',
    year: '2021 · team project',
    tags: ['Angular', 'Express', 'MongoDB'],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Back end', items: ['Java', 'Spring Boot', 'Node.js', 'Express', 'REST APIs', 'Microservices'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Kubernetes', 'Docker', 'Helm', 'Jenkins', 'CI/CD'] },
  { group: 'Front end', items: ['TypeScript', 'React', 'Angular', 'HTML & CSS'] },
  { group: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { group: 'Architecture', items: ['Distributed systems', 'Event-driven design', 'Application security'] },
  { group: 'Also', items: ['Python', 'JUnit', 'Jest', 'Cypress'] },
];

export const education = [
  {
    degree: 'M.S. Information Systems',
    detail: 'Northeastern University, Boston. Also an instructional assistant, 2020 – 2021.',
    years: '2020 – 2022',
  },
  { degree: 'B.E. Computer Engineering', detail: 'University of Mumbai', years: '2014 – 2018' },
];

export const certifications = {
  intro: 'Recently certified in agentic coding with Claude Code and in generative AI essentials.',
  items: [
    {
      name: 'Agentic Coding with Claude Code',
      issuer: 'Credly',
      href: 'https://www.credly.com/badges/99037f2b-d83b-4c0b-8679-10f61d958394',
    },
    {
      name: 'Machine Learning Operations (MLOps) for Generative AI',
      issuer: 'Google Skills',
      href: 'https://www.skills.google/public_profiles/7b774116-94ea-419c-b93b-821d281c5787/badges/23628049?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
    {
      name: 'Introduction to Generative AI',
      issuer: 'Google Skills',
      href: 'https://www.skills.google/public_profiles/7b774116-94ea-419c-b93b-821d281c5787/badges/23627962?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    },
    {
      name: 'GenAI Essentials for Everyone',
      issuer: 'Credly',
      href: 'https://www.credly.com/badges/2ca226c6-7360-4232-85d2-09bb6a71bfb0/public_url',
    },
    {
      name: 'Kubernetes for Beginners',
      issuer: 'Credly',
      href: 'https://www.credly.com/badges/45645a7d-4dd9-4b1b-a54e-511d8fda2680/public_url',
    },
  ],
};

export const publication = {
  title: 'MoodyPlayer: A Music Player Based on Facial Expression Recognition',
  href: 'https://irjet.net/archives/V5/i4/IRJET-V5I4830.pdf',
  blurb: 'My first published paper: a music player that picks songs from your facial expression.',
  venue: 'IRJET · 2018',
};
