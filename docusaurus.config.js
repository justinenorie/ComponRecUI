// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ComponRecUI",
  tagline:
    " Every collection of ComponRecUI components so far that is made with React and TailwindCSS only.",
  favicon: "img/ComponRecUI.ico",
  plugins: [
    "./src/plugins/tailwind-config.js",
    require.resolve("./src/plugins/docs-metadata-plugin"),
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com", //TODO: Change this with production site
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ComponRecUI", // Usually your GitHub org/user name.
  projectName: "ComponRecUI", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/justinenorie/ComponRecUI/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "ComponRecUI",
        logo: {
          alt: "ComponRecUI Logo",
          src: "img/ComponRecUI.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Components",
          },
          {
            href: "https://github.com/justinenorie/ComponRecUI",
            position: "right",
            label: "Github",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "ComponRecUI Logo",
          src: "img/ComponRecUI.svg",
          width: 45,
          height: 45,
        },
        // THere should be ComponRecUI here with description... And the icon is in the right left side
        links: [
          {
            title: "Components Category",
            items: [
              {
                label: "Actions",
                to: "/docs/intro",
              },
              {
                label: "Layouts",
                to: "/docs/intro",
              },
            ],
          },
          // TODO: This app does not require a blog.
          {
            title: "Socials",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        // TODO: Add Custom HTML styling here for footer.
        copyright: `Copyright © ${new Date().getFullYear()} ComponRecUI. Created by Justine Norie. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
