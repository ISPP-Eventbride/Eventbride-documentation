// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eventbride - Documentación',
  tagline: 'Eventos que brillan y recuerdos que perduran',
  favicon: 'img/Eventbride.png',

  url: 'https://ispp-2425-g3.ew.r.appspot.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ISPP-Eventbride',
  projectName: 'Eventbride-documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ISPP-Eventbride/Eventbride-documentation',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ISPP-Eventbride/Eventbride-documentation',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Eventbride',
        logo: {
          alt: 'Eventbride Logo',
          src: 'img/Eventbride.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentos',
          },
          {to: '/equipo', label: 'Equipo', position: 'left'},
          {to: '/contacto', label: 'Contacto', position: 'left'},
          {
            href: 'https://sprint3-dot-ispp-2425-03.ew.r.appspot.com/login',
            label: 'Eventbride',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentos',
            items: [
              {
                label: 'Introducción',
                to: '/docs/intro',
              },
              {
                label: 'DP',
                to: '/docs/category/dp',
              },
              {
                label: 'Sprint 1',
                to: '/docs/category/s1',
              },
              {
                label: 'Sprint 2',
                to: '/docs/category/s2',
              },
              {
                label: 'Sprint 3',
                to: '/docs/intro',
              },
              {
                label: 'PPL',
                to: '/docs/intro',
              },
              {
                label: 'WPL',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/eventbride_svq/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/eventbride/',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@eventbride',
              },
              {
                label: 'Equipo',
                to: '/equipo',
              },
            ],
          },
          {
            title: 'Más Enlaces',
            items: [
              {
                label: 'Contacto',
                to: '/contacto',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/orgs/ISPP-Eventbride/repositories',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Eventbride, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
