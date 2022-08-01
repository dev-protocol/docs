// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Battlesnake Docs',
  tagline: 'A multiplayer programming game where your code is the controller.',
  url: 'https://BattlesnakeOfficial.github.io/',
  baseUrl: '/docs-new/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BattlesnakeOfficial', // Usually your GitHub org/user name.
  projectName: 'docs-new', // Usually your repo name.
  trailingSlash: false,


  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'announcement-bar-1',  // Increment on new announcement
        content: '⭐️ Enjoying Battlesnake? Follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/playbattlesnake">Twitter</a> and <a target="_blank" rel="noopener noreferrer" href="https://twitch.tv/BattlesnakeOfficial">Twitch</a> 💜'
      },
      navbar: {
        logo: {
          alt: 'Battlesnake Docs',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Quick Start',
            type: 'doc',
            docId: 'quick-start'
          },
          {
            label: 'Starter Templates',
            type: 'doc',
            docId: 'starter-templates'
          },
          {
            label: 'API Reference',
            type: 'doc',
            docId: 'api/index'
          },
          {
            label: 'Community Wiki',
            type: 'doc',
            docId: 'wiki/index'
          },
          {
            href: 'https://github.com/BattlesnakeOfficial/docs-new',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick Start',
                to: 'quick-start',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Battlesnake Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
