module.exports = {
  title: 'Expedia Group Open Source Projects',
  tagline: 'A portal for discovering Expedia Group Open Source projects',
  url: 'https://expediagroup.github.io/',
  baseUrl: '/open-source-portal/',
  organizationName: 'ExpediaGroup',
  projectName: 'open-source-portal',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    navbar: {
      logo: {
        alt: 'EG OSS Logo',
        src: 'img/banner.png',
      },
      items: [
        {
          href: 'https://github.com/ExpediaGroup',
          label: 'Projects',
          position: 'right',
        },
        {
          href: 'https://medium.com/expedia-group-tech',
          label: 'Tech Blog',
          position: 'right',
        },
        {
          href: 'https://lifeatexpediagroup.com',
          label: 'Careers at EG',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Expedia Group. All rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/global.css'),
        },
        docs: false,
        blog: false
      },
    ],
  ],
  customFields: {
    heroConfig: {
      title: 'Powering global travel through a world-class tech platform.',
      subtitle: 'Peek behind the scenes at our open source projects.'
    },
    repositoriesConfig: {
      allReposLink: 'https://github.com/ExpediaGroup'
    },
    socialLinks: {
      techBlog: 'https://medium.com/expedia-group-tech',
      twitter: 'https://twitter.com/ExpediaGroupEng'
    }
  }
};
