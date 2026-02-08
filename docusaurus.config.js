// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Learn Physical AI and Humanoid Robotics step by step',
  favicon: 'img/favicon.ico',

  // Production URL
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  // GitHub deployment (optional)
  organizationName: 'azlankhan', // GitHub username
  projectName: 'physical-ai-book', // Repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/azlankhan/physical-ai-book/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/azlankhan/physical-ai-book/tree/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Physical AI',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Azlankhan12345/physical-ai-humanoid-robotics-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Tutorial', to: '/docs/intro'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus'},
            {label: 'Discord', href: 'https://discordapp.com/invite/docusaurus'},
            {label: 'X', href: 'https://x.com/docusaurus'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'GitHub', href: 'https://github.com/Azlankhan12345/physical-ai-humanoid-robotics-book'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Made by Azlan Khan`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    colorMode: {
      respectPrefersColorScheme: true,
    },
  },
};

export default config;
