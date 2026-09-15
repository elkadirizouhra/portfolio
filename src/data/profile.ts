/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every string rendered on the site lives in this file. Edit here — never in
 *  the components — and the whole site updates.
 *
 *  Content comes from the CV (CV_Zouhra_Elkadiri.pdf). Items marked "CONFIRM"
 *  still need a real value before publishing.
 */

export type Social = {
  label: string
  href: string
  handle: string
  icon: 'linkedin' | 'github' | 'mail'
}

export type SkillGroup = {
  title: string
  icon: 'code' | 'layout' | 'server' | 'smartphone' | 'database' | 'cloud'
  blurb: string
  skills: string[]
}

export type Project = {
  slug: string
  name: string
  tagline: string
  category: string
  period: string
  role: string
  /** Company the work was delivered for — shown in the case study. */
  client: string
  /** Short card copy. */
  summary: string
  /** The business pain that justified building it. */
  problem: string
  /** What was actually delivered. */
  solution: string
  features: string[]
  tech: string[]
  outcomes: string[]
  status: 'Production' | 'Internal' | 'In development'
  links?: { github?: string; demo?: string }
  /** Two-letter monogram shown on the card artwork. */
  monogram: string
}

/* ────────────────────────────────  IDENTITY  ──────────────────────────────── */

export type Profile = {
  firstName: string
  lastName: string
  fullName: string
  /** Initials used for the logo mark. */
  monogram: string
  role: string
  /** The specialisation line from the CV. */
  specialism: string
  location: string
  /** Comment this line out to hide the green "available" pill in the hero. */
  availability?: string
  intro: string
  email: string
  phone: string
  cvPath: string
  siteUrl: string
}

export const profile: Profile = {
  firstName: 'Zouhra',
  lastName: 'Elkadiri',
  fullName: 'Zouhra Elkadiri',
  monogram: 'ZE',
  role: 'Software Engineer',
  specialism: 'Java · JEE · Spring Boot',
  location: 'Casablanca, Morocco',
  availability: 'Open to new opportunities',
  intro:
    'I build scalable, user-focused applications using modern web, mobile and backend technologies.',
  email: 'zahiraelkadiri6@gmail.com',
  phone: '+212 642 669 375',
  cvPath: '/cv/CV_Zouhra_Elkadiri.pdf',
  // CONFIRM — the domain you deploy to. Also update the URLs in index.html.
  siteUrl: 'https://zouhraelkadiri.com',
}

/** The code panel rendered beside the hero headline. Purely editorial. */
export const heroSnippet = {
  title: 'zouhra.engineer.ts',
  lines: [
    'const zouhra: SoftwareEngineer = {',
    '  based: "Casablanca, Morocco",',
    '  focus: ["backend", "full-stack", "mobile"],',
    '  stack: {',
    '    backend: ["Java", "JEE", "Spring Boot"],',
    '    web:     ["React", "Redux Toolkit", "MUI"],',
    '    mobile:  ["Flutter", "Node.js", "Firebase"],',
    '    cloud:   ["Docker", "CI/CD", "GCP"],',
    '  },',
    '  // shipping to production since day one',
    '  building: true,',
    '};',
  ],
} as const

export const socials: Social[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zouhra-elkadiri-b129a8260/',
    handle: '/in/zouhra-elkadiri',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/elkadirizouhra',
    handle: '@elkadirizouhra',
    icon: 'github',
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    handle: profile.email,
    icon: 'mail',
  },
]

/* ──────────────────────────────────  ABOUT  ───────────────────────────────── */

export const about = {
  paragraphs: [
    'I am a Software Engineer with an engineering degree from INPT and more than a year of experience designing and developing enterprise applications in Java/JEE and Spring Boot — on systems already in production, with real users and real data behind them.',
    'My work covers the full lifecycle: analysing business needs, writing functional and technical specifications, designing component-oriented architectures to quality standards, then building, testing and deploying. At Varun Beverages Morocco I have replaced spreadsheet-driven supply chain reporting with a centralised platform, digitalised a fully manual HR allocation process, and shipped a suite of field applications for the sales teams.',
    'I like problems where the hard part is not the framework — bulk corrections on critical production data, consolidation errors that quietly distort a KPI, paper reporting that reaches management a week late. I ramp up quickly on new technologies, and I want to keep growing alongside engineers who hold a high bar.',
  ],
  focusAreas: [
    'Software engineering',
    'Application architecture',
    'Backend development',
    'Mobile development',
    'Database design',
    'API development',
    'Cloud technologies',
    'Problem solving',
  ],
  stats: [
    {
      value: '1+',
      label: 'Year of professional experience',
      sub: 'Enterprise software, full lifecycle',
    },
    {
      value: '8',
      label: 'Production applications',
      sub: 'Supply chain, HR and field sales',
    },
    {
      value: 'Full-stack',
      label: 'Backend, web & mobile',
      sub: 'Spring Boot · React · Flutter',
    },
    {
      value: 'INPT',
      label: 'Engineering degree',
      sub: 'Advanced software engineering',
    },
  ],
  /** Shown as a compact row under the narrative. */
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'French', level: 'Fluent (professional)' },
    { name: 'English', level: 'Professional' },
  ],
} as const

/* ──────────────────────────────────  SKILLS  ──────────────────────────────── */

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    icon: 'code',
    blurb: 'The languages I reach for daily, across backend, web and mobile.',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Dart', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    icon: 'server',
    blurb: 'Layered services, clean contracts and reliable persistence.',
    skills: ['Spring Boot', 'JEE (Servlets/JSP)', 'JPA/Hibernate', 'JDBC', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    blurb: 'Component-driven interfaces with predictable state and accessible markup.',
    skills: ['React JS', 'Redux Toolkit', 'MUI', 'Thymeleaf'],
  },
  {
    title: 'Mobile',
    icon: 'smartphone',
    blurb: 'Cross-platform apps built for real field conditions.',
    skills: ['Flutter', 'React Native', 'Expo', 'Firebase'],
  },
  {
    title: 'Databases',
    icon: 'database',
    blurb: 'Schema design, indexing and query work on relational and document stores.',
    skills: ['SQL Server (SSMS)', 'MySQL', 'Firebase Firestore'],
  },
  {
    title: 'DevOps, Cloud & Tools',
    icon: 'cloud',
    blurb: 'Containerised delivery, automated pipelines and the tooling around them.',
    skills: [
      'Docker',
      'CI/CD',
      'GCP',
      'Firebase Hosting',
      'JUnit',
      'Git',
      'Postman',
      'Power BI',
      'Power Automate',
    ],
  },
]

/* ────────────────────────────────  EXPERIENCE  ────────────────────────────── */

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  type: string
  summary: string
  responsibilities: string[]
  stack: string[]
  /** Slugs of projects delivered in this role — links into the Projects section. */
  projectSlugs: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Varun Beverages Morocco',
    role: 'Software Engineer',
    period: 'July 2025 — Present',
    location: 'Bouskoura, Morocco',
    type: 'Full-time',
    summary:
      'I design and build the internal applications that run day-to-day operations — supply chain, field sales and HR — for a large FMCG manufacturing and distribution business. The work spans backend services, web platforms, mobile apps and the databases underneath, from first requirement through to production support.',
    responsibilities: [
      'Analyse business needs and write the functional and technical specifications behind each application.',
      'Design component-oriented application architectures in line with quality standards.',
      'Build backend services and REST APIs with Java/JEE and Spring Boot.',
      'Develop cross-platform mobile applications used daily by field sales teams.',
      'Design relational and document database structures, and write the queries behind operational reporting.',
      'Implement authentication and role-based authorization, including corporate LDAP directory integration.',
      'Refactor existing production code and deliver new features on request from business users.',
      'Package and deploy services with Docker, CI/CD pipelines and Google Cloud.',
      'Support business teams through the rollout of cross-functional solutions (WMS, Visiativ, Power Automate), driving adoption and reducing change friction.',
      'Maintain, monitor and extend applications already running in production.',
    ],
    stack: [
      'Java',
      'JEE',
      'Spring Boot',
      'React JS',
      'Flutter',
      'SQL Server',
      'Docker',
      'CI/CD',
      'GCP',
    ],
    projectSlugs: ['supply-chain-tower', 'sales-tracking-apps', 'estivage-app', 'samna-extension'],
  },
  {
    company: '4D Logiciels',
    role: 'Software Engineer — Final-year internship',
    period: 'February 2025 — June 2025',
    location: 'Rabat, Morocco',
    type: 'Internship',
    summary:
      'End-of-studies internship building an HR and expense-management application, where I took the manual work out of expense reporting using OCR and gave management an analytical view of spending.',
    responsibilities: [
      'Develop an HR management and expense-report application end to end.',
      'Automate expense-report processing with Azure Document Intelligence OCR, removing manual data entry.',
      'Build mission management workflows for employees and managers.',
      'Develop a Power BI dashboard for analytical tracking of spending by employee and by period.',
      'Deliver web and mobile clients with React JS, Redux Toolkit and React Native / Expo.',
    ],
    stack: [
      '4D',
      'ORDA',
      'React JS',
      'Redux Toolkit',
      'React Native',
      'Expo',
      'Azure Document Intelligence',
      'Power BI',
    ],
    projectSlugs: ['hr-expense-app'],
  },
]

/* ─────────────────────────────────  PROJECTS  ─────────────────────────────── */

/**
 * Add `links: { github: '…' }` (and/or `demo`) to any project to surface the
 * buttons on the card and in the case study. Projects without links show
 * "source code is not public" instead — the right default for internal work.
 */
export const projects: Project[] = [
  {
    slug: 'supply-chain-tower',
    name: 'Supply Chain Tower',
    monogram: 'SC',
    tagline: 'A control tower for logistics operations that used to live in spreadsheets.',
    category: 'Enterprise web platform',
    client: 'Varun Beverages Morocco',
    period: '2025 — Present',
    role: 'Software Engineer — architecture, backend, React front end and deployment',
    status: 'Production',
    summary:
      'A centralised web platform for multi-warehouse logistics steering — transport, breakage and expired stock — replacing a sprawl of Excel reporting files with one governed source of truth.',
    problem:
      'Logistics reporting ran on multiple Excel files circulated between warehouses. Consolidating them by hand introduced errors that quietly distorted the KPIs management relied on, decisions waited on the next consolidation cycle, and there was no reliable history or data governance across an FMCG operation spanning several warehouses.',
    solution:
      'I designed and built a centralised platform with role- and warehouse-scoped access, so each site enters its own data against validated rules and consolidation happens by construction rather than by hand. The backend is Spring Boot over SQL Server with JUnit coverage; the front end is React with Redux Toolkit and MUI. The whole thing is containerised with Docker and delivered to Google Cloud through a CI/CD pipeline.',
    features: [
      'Role-based and warehouse-scoped access control',
      'Transport and truck movement follow-up',
      'Casse (breakage) tracking and KPIs',
      'Expired-stock (périmé) monitoring',
      'Centralised dashboards for logistics steering',
      'Validated data entry that removes manual consolidation',
      'Historised data enabling period-over-period comparison',
    ],
    tech: [
      'Spring Boot',
      'JUnit',
      'React JS',
      'MUI',
      'Redux Toolkit',
      'SQL Server',
      'Docker',
      'CI/CD',
      'GCP',
    ],
    outcomes: [
      'Eliminated the consolidation errors that came from merging Excel files by hand.',
      'Accelerated decision-making by putting logistics KPIs in one live view.',
      'Made data governance reliable across a multi-warehouse FMCG operation.',
    ],
  },
  {
    slug: 'sales-tracking-apps',
    name: 'Sales Tracking Apps',
    monogram: 'ST',
    tagline: 'Four field applications that replaced paper reporting with real-time visibility.',
    category: 'Mobile application suite',
    client: 'Varun Beverages Morocco',
    period: '2025 — Present',
    role: 'Software Engineer — Flutter development, synchronisation design and backend integration',
    status: 'Production',
    summary:
      'A suite of four Flutter applications — Beverages, Modern Trade, Key Accounts and Snacks — giving sales teams real-time performance visibility in the field, with automatic sync and an AI-based recommendation module.',
    problem:
      'Field reporting was done on paper and consolidated into Excel afterwards. Management saw commercial performance days late, the data could not be verified, and a salesperson standing in front of a point of sale had no way of knowing how they or that outlet were actually performing.',
    solution:
      'I built four Flutter applications tailored to each sales channel, backed by Node.js services with automatic synchronisation between Firestore and SQL Server, so data captured in the field lands in the reporting layer without manual re-entry. Devices are managed through Scalefusion MDM, and a recommendation module built on Gemini AI surfaces suggested actions per salesperson and point of sale.',
    features: [
      'Four channel-specific apps: Beverages, Modern Trade, Key Accounts, Snacks',
      'Real-time performance visibility per salesperson and per point of sale',
      'Automatic Firestore / SQL Server synchronisation',
      'AI-based recommendation module powered by Gemini',
      'Structured field data collection replacing paper forms',
      'Business dashboards for commercial follow-up',
      'Fleet-wide device management through Scalefusion MDM',
    ],
    tech: [
      'Flutter',
      'Dart',
      'Node.js',
      'Firebase',
      'Firestore',
      'SQL Server',
      'Scalefusion MDM',
      'Gemini AI',
    ],
    outcomes: [
      'Removed the paper-then-retype loop — data is captured once, at the point of sale.',
      'Turned delayed Excel consolidation into real-time commercial visibility.',
      'Put performance indicators and AI recommendations in the sales team’s hands during the visit.',
    ],
  },
  {
    slug: 'estivage-app',
    name: 'Estivage App',
    monogram: 'EA',
    tagline: 'A manual HR allocation process, digitalised and made consistent.',
    category: 'HR / internal platform',
    client: 'Varun Beverages Morocco',
    period: '2025',
    role: 'Software Engineer — full-stack development, scoring engine and directory integration',
    status: 'Production',
    summary:
      'An internal platform that digitalises employee holiday-accommodation requests end to end: eligibility scoring, slot allocation and result notifications, all automated against agreed HR rules.',
    problem:
      'The estivage process was entirely manual. Requests arrived by email, scoring and allocation were done in Excel, and results were communicated by hand. It was slow, hard to audit, and the HR rules were not applied consistently from one file to the next — which made decisions easy to contest.',
    solution:
      'I built an application where employees authenticate against the corporate directory over LDAP and submit their request once. Eligibility is scored automatically from seniority and family situation, slots are allocated against capacity, and results are sent out through JavaMailSender. HR reviews a ranked, explainable list instead of a pile of emails. Spring Boot and React over SQL Server, containerised with Docker and deployed on Google Cloud.',
    features: [
      'Employee authentication through corporate LDAP',
      'Automated eligibility scoring on seniority and family situation',
      'Slot allocation with capacity management',
      'Automated result notifications by email (JavaMailSender)',
      'Ranked allocation workspace for the HR team',
      'Consistent, auditable application of the HR rules',
    ],
    tech: ['Spring Boot', 'LDAP', 'JavaMailSender', 'React', 'SQL Server', 'Docker', 'GCP'],
    outcomes: [
      'Cut processing time on a process that previously ran on email and Excel.',
      'Guaranteed consistent application of the HR rules across every request.',
      'Gave HR an auditable record of how each allocation was decided.',
    ],
  },
  {
    slug: 'samna-extension',
    name: 'SAMNA System Extension',
    monogram: 'SA',
    tagline: 'Safe bulk data correction on a critical production system.',
    category: 'Enterprise web application',
    client: 'Varun Beverages Morocco',
    period: '2025 — Present',
    role: 'Software Engineer — design, development and refactoring',
    status: 'Production',
    summary:
      'A Java/JEE web application that closes functional gaps in SAMNA, a production system, letting business teams perform bulk data corrections and updates safely — without direct database access.',
    problem:
      'SAMNA had functional gaps that left business teams unable to correct or update data through the application itself. The fallback was direct database access for bulk changes on critical data — slow, restricted to a few people, and carrying a real risk of human error with no safety net.',
    solution:
      'I designed and developed a Java/JEE web application on top of the existing system, exposing controlled bulk correction and update operations to the business teams themselves. Changes go through the application layer and its validation rather than raw SQL, which removes the human-error risk on critical data. The work also involved refactoring the existing codebase and delivering new features on request as users identified further gaps.',
    features: [
      'Bulk data correction and update operations for business users',
      'Controlled access that removes the need for direct database connections',
      'Validation at the application layer on critical data',
      'Refactoring of the existing production codebase',
      'Incremental feature delivery driven by user requests',
    ],
    tech: ['Java', 'JEE', 'Servlets', 'JSP', 'JDBC', 'SQL Server'],
    outcomes: [
      'Eliminated the human-error risk of manual bulk edits on critical production data.',
      'Gave business teams autonomy over corrections that previously needed a developer.',
      'Closed functional gaps in a production system without replacing it.',
    ],
  },
  {
    slug: 'hr-expense-app',
    name: 'HR & Expense Management',
    monogram: 'HR',
    tagline: 'OCR that removed manual expense entry, and a dashboard that explained the spend.',
    category: 'Web & mobile application',
    client: '4D Logiciels — final-year internship',
    period: '2025',
    role: 'Software Engineer (intern) — full-stack development and OCR integration',
    status: 'Production',
    summary:
      'An HR management and expense-report application that automates expense processing through Azure Document Intelligence OCR, with mission management and a Power BI analytics dashboard.',
    problem:
      'Expense reports were typed in by hand from paper receipts. The process was slow, duplicated effort between employee and finance, and every re-entry was an opportunity for a transcription error. There was also no analytical view of what was being spent, by whom, or over which period.',
    solution:
      'I built an application that reads receipts through Azure Document Intelligence OCR and pre-fills the expense report, so the employee reviews rather than retypes. Mission management was added alongside it, and I developed a Power BI dashboard giving finance an analytical view of spending per employee and per period. Built on 4D with ORDA, with a React JS front end and a React Native / Expo mobile client.',
    features: [
      'Automated expense capture via Azure Document Intelligence OCR',
      'Elimination of manual entry and re-entry errors',
      'Mission management for employees and managers',
      'Power BI dashboard for spend analysis by employee and period',
      'React JS web client with Redux Toolkit state management',
      'React Native / Expo mobile client',
    ],
    tech: [
      '4D',
      'ORDA',
      'React JS',
      'Redux Toolkit',
      'React Native',
      'Expo',
      'Azure Document Intelligence',
      'Power BI',
    ],
    outcomes: [
      'Removed manual expense entry and the re-entry errors that came with it.',
      'Gave finance an analytical view of spending that did not exist before.',
      'Delivered as an end-of-studies internship project, in production use.',
    ],
  },
]

/* ────────────────────────────────  EDUCATION  ─────────────────────────────── */

export type Education = {
  degree: string
  field: string
  institution: string
  abbr: string
  location: string
  period: string
  summary: string
  coursework: string[]
}

export const education: Education[] = [
  {
    degree: 'Engineering Degree (Diplôme d’Ingénieur)',
    field: 'Advanced Software Engineering for Digital Services',
    institution: 'Institut National des Postes et Télécommunications',
    abbr: 'INPT',
    location: 'Rabat, Morocco',
    period: '2022 — 2025',
    summary:
      'An engineering programme at one of Morocco’s leading engineering schools, specialising in advanced software engineering for digital services — combining computer science fundamentals with applied architecture, distributed systems and cloud practice, with project work throughout.',
    coursework: [
      'Software engineering',
      'Algorithms & data structures',
      'Databases',
      'Software architecture',
      'Web development',
      'Mobile development',
      'Distributed systems',
      'Cloud technologies',
    ],
  },
  {
    degree: 'Classes Préparatoires aux Grandes Écoles',
    field: 'Industrial Sciences and Technology (TSI)',
    institution: 'Classes Préparatoires Ibn Bajja',
    abbr: 'CPGE',
    location: 'Béni Mellal, Morocco',
    period: '2020 — 2022',
    summary:
      'Two years of intensive preparatory classes in mathematics, physics and engineering sciences, concluded by the national competitive entrance examination to Morocco’s engineering schools.',
    coursework: [
      'Mathematics',
      'Physics',
      'Industrial sciences',
      'Engineering sciences',
      'Computer science',
    ],
  },
]

/* ──────────────────────────────  CERTIFICATIONS  ──────────────────────────── */

export type Certification = {
  name: string
  issuer: string
  status: 'Earned' | 'In progress' | 'Planned'
  year: string
  focus: string
  credentialUrl?: string
}

/**
 * Add a certificate by appending an object here — the grid handles the rest.
 * Set `status: 'Earned'` and add `credentialUrl` once the credential is issued.
 */
export const certifications: Certification[] = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    status: 'In progress',
    year: '2026',
    focus: 'Cloud fundamentals, core AWS services, architecture and cost basics.',
  },
  {
    name: 'GitHub Copilot (GH-300)',
    issuer: 'GitHub',
    status: 'In progress',
    year: '2026',
    focus: 'AI-assisted development workflows, prompt design and responsible use.',
  },
  {
    name: 'Spring Boot & Java Development',
    issuer: 'Continuous learning',
    status: 'In progress',
    year: '2026',
    focus: 'Advanced Spring, testing strategy and production-grade service design.',
  },
  {
    name: 'Google Cloud Fundamentals',
    issuer: 'Google Cloud',
    status: 'Planned',
    year: '2026',
    focus: 'Containerised deployment, managed services and cloud-native patterns.',
  },
  {
    name: 'Software Architecture',
    issuer: 'Continuous learning',
    status: 'Planned',
    year: '2026',
    focus: 'Architectural patterns, trade-off analysis and system design at scale.',
  },
]

/* ───────────────────────────────  PROBLEM SOLVING  ────────────────────────── */

export const problemSolving = {
  intro:
    'I practise algorithmic problem solving regularly — not to collect a badge, but because the habits transfer: reasoning about complexity before writing code, choosing the right data structure, and handling the edge case that breaks production at 2am.',
  platforms: [
    { name: 'LeetCode', note: 'Regular practice across arrays, strings, hashing and search.' },
  ],
  topics: [
    { name: 'Binary Search', complexity: 'O(log n)', note: 'Sorted ranges, answer-space search' },
    { name: 'Sliding Window', complexity: 'O(n)', note: 'Subarrays, streaks, rate windows' },
    { name: 'Hash Maps', complexity: 'O(1) avg', note: 'Lookup, grouping, deduplication' },
    { name: 'Arrays & Strings', complexity: 'O(n)', note: 'Two pointers, in-place transforms' },
    { name: 'Sorting', complexity: 'O(n log n)', note: 'Ordering, interval merging' },
    { name: 'Recursion & Trees', complexity: 'O(n)', note: 'Traversal, divide and conquer' },
  ],
  /** Rendered as a syntax-highlighted snippet in the section. */
  snippet: {
    language: 'java',
    title: 'LongestUnique.java',
    lines: [
      '// Longest substring without repeating characters',
      '// Sliding window + last-seen map — one pass, O(n)',
      'int lengthOfLongestSubstring(String s) {',
      '    Map<Character, Integer> seen = new HashMap<>();',
      '    int best = 0, start = 0;',
      '',
      '    for (int i = 0; i < s.length(); i++) {',
      '        char c = s.charAt(i);',
      '        if (seen.containsKey(c)) {',
      '            start = Math.max(start, seen.get(c) + 1);',
      '        }',
      '        seen.put(c, i);',
      '        best = Math.max(best, i - start + 1);',
      '    }',
      '    return best;',
      '}',
    ],
  },
} as const

/* ─────────────────────────────────  CAREER  ───────────────────────────────── */

export const careerGoals = {
  statement:
    'I am looking for opportunities where I can grow as a Software Engineer, work on challenging technical problems, contribute to scalable applications, and collaborate with experienced engineering teams.',
  interests: [
    {
      title: 'Java / Spring Boot',
      note: 'Deepening service design, testing and performance work.',
    },
    {
      title: 'Backend engineering',
      note: 'APIs, data modelling and systems that stay correct under load.',
    },
    {
      title: 'Full-stack development',
      note: 'Owning a feature end to end, from schema to interface.',
    },
    {
      title: 'Cloud & DevOps',
      note: 'Containerised delivery, managed services and sound deployment practice.',
    },
    {
      title: 'Software architecture',
      note: 'Making trade-offs explicit and designing for change.',
    },
    {
      title: 'New technologies',
      note: 'Currently ramping up on Oracle, NoSQL and JSF — I pick things up fast.',
    },
  ],
} as const

/* ────────────────────────────────  NAVIGATION  ────────────────────────────── */

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const
