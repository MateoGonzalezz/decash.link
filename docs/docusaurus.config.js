// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {


  
  title: 'DeCash',
  tagline: 'DeCash documentation',
  favicon: 'img/decash-icon-white.svg',

  // Set the production url of your site here
  url: 'https://docs.decash.link',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:'https://github.com/saugardev/decash.link/docs',
        },       
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DeCash',        
        logo: {
          alt: 'My Site Logo',
          src: 'img/decash-icon-white.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'decashSidebar',
            position: 'left',
            label: 'Documentation',
          },
            
          {
            href: 'https://github.com/saugardev/decash.link',
            src: 'img/github-mark-white.svg',
            position: 'right',
            alt: 'Github logo',

          },
          {
            href: 'https://github.com/saugardev/decash.link',
            label: 'GitHub',
            position: 'right',
          },
          
        ],
      },      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};


export default config;
