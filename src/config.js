module.exports = {
  siteTitle: 'Prosenjit Chandra Biswas | Competitive programmer',
  siteDescription:
    'Prosenjit Chandra Biswas is a insightfull computer science student',
  siteKeywords:
    'prosenjit',
  siteUrl: 'https://prosenjit07.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-127188467-2',
  googleVerification: 'zWJzGMVk8J4FpXsLNpt7CB17SPaa2_ti9YfdGwnGr00',
  name: 'Prosenjit ',
  location: 'Dhaka, Bangladesh',
  email: 'prosenjitbiswas983@gmail.com',
  github: 'https://github.com/prosenjit07',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/prosenjit07',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/prosenjit-biswas-p14568/',
    },
    {
      name: 'Npm',
      url: 'npx prosenjit',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jitroy_7/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/misteranmol',
    },
  ],
  lastUpdated: '15-jul-2022',

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
