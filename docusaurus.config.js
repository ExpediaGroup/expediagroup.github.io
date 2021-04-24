const customFields = {
  heroConfig: {
    title: 'Powering global travel through a world-class tech platform.',
    subtitle: 'Peek behind the scenes at our open source projects.'
  },
  repositoriesConfig: {
    navbarLabel: 'Projects',
    allReposLink: 'https://github.com/ExpediaGroup',
    exploreMoreText: 'Explore More Projects'
  },
  socialConfig: {
    blog: {
      title: 'Blog Posts',
      navbarLabel: 'Tech Blog',
      link: 'https://medium.com/expedia-group-tech',
      footerText: 'Read more stories on our tech blog'
    },
    careers: {
      title: 'Our Careers',
      navbarLabel: 'Careers at EG',
      link: 'https://lifeatexpediagroup.com',
      footerText: 'Explore a career at Expedia Group'
    },
    twitter: {
      title: 'Tweets',
      link: 'https://twitter.com/ExpediaGroupEng',
      footerText: "What we're saying on Twitter"
    }
  }
};

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
          href: customFields.repositoriesConfig.allReposLink,
          label: customFields.repositoriesConfig.navbarLabel,
          position: 'right',
        },
        {
          href: customFields.socialConfig.blog.link,
          label: customFields.socialConfig.blog.navbarLabel,
          position: 'right',
        },
        {
          href: customFields.socialConfig.careers.link,
          label: customFields.socialConfig.careers.navbarLabel,
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
  customFields: customFields
};
