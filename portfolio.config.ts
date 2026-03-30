const CONFIG = {
  github: {
    username: 'ruxy1212', // Your GitHub org/user name. (This is the only required config)
    repositoryOwner: 'ruxy1212', // Defaults to username when omitted.
    defaultRepository: 'ruxy1212', // Used for README.
    projectRepository: 'typing-speed-test', // Used for Stars and Issues tabs.
  },
  title: 'Github Portfolio', // Title shown beside avatar in Header
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/ruxy1212/ruxy1212.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/ruxy1212/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['ruxy1212/my-project1', 'ruxy1212/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ruxy1212/val-card', 'ruxy1212/typing-speed-test'], // List of repository names to display. example: ['ruxy1212/my-project1', 'arifszn/my-project2']
      },
      explainerApi: {
        url: 'http://localhost:3000/api/analyze',
        limit: 5,
      },
    },
    external: {
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          fullDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut varius feugiat, lectus tortor congue lorem, at feugiat sem arcu vel nisi.',
          year: '2025',
          stack: ['React', 'TypeScript', 'Tailwind CSS'],
          media: [
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          ],
          videoUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.mp4',
          link: 'https://example.com',
          repo: '',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          fullDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut varius feugiat, lectus tortor congue lorem, at feugiat sem arcu vel nisi.',
          year: '2024',
          stack: ['Node.js', 'PostgreSQL'],
          media: [
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          ],
          videoUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.mp4',
          link: 'https://example.com',
          repo: '',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Russell Oje', description: '', imageURL: '' },
  social: {
    linkedin: 'russelloje',
    x: 'russell_oje',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'prophetr',
    dev: 'russelloje',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: 'https://ruxy.tech',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '/files/russell_oje_fullstack_resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'Typescript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'TailwindCSS',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
      description:
        'Led backend and frontend delivery, designed scalable APIs, and collaborated closely with design and product teams.',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
      description:
        'Implemented customer-facing features, improved performance, and maintained CI/CD pipelines for reliable releases.',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'prophetr', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  contact: {
    endpoint: 'http://localhost:3000/api/send-email', //'https://ruxy.tech/api/send-email',
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: {
      dark: [
        'black', // pure black
        'dark', // default dark
        'night', // deep blue-gray
        'dracula', // purple/black
        'abyss', // muted dark
        'procyon', // dark blue-gray
        'luxury', // dark with subtle contrast
        'dim', // muted dark gray
        'coffee', // warm dark brown
        'nord', // cold dark gray/blue
        'sunset', // dark with warm tones
        'cmyk', // dark with bright accent
        'cyberpunk', // neon on dark
        'acid', // bright neon on dark
        'synthwave', // neon purple/pink
        'silk', // soft dark gray
        'winter', // dark bluish-gray
      ],
      light: [
        'light', // pure white
        'cupcake', // soft pastel white
        'bumblebee', // yellowish accents on light
        'emerald', // bright green on light
        'corporate', // professional clean light
        'garden', // soft green light
        'forest', // light earthy green
        'aqua', // blue/cyan light
        'lofi', // muted soft light
        'pastel', // soft pastels
        'fantasy', // colorful pastels
        'retro', // muted retro light
        'valentine', // pink/red pastel
        'halloween', // orange/yellow light
        'wireframe', // minimal light gray/white
        'autumn', // warm light browns
        'business', // light professional palette
        'lemonade', // soft yellow pastel
        'caramellatte', // cream/light beige palette
      ],
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/ruxy1212/git-portfolio"
      target="_blank"
      rel="noreferrer"
    >Git-Portfolio</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
