module.exports = {
  title: 'Expedia Group Open Source Projects',
  tagline: 'A portal for discovering Expedia Group Open Source projects',
  url: 'https://expediagroup.github.io/',
  baseUrl: '/open-source-portal/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ExpediaGroup', // Usually your GitHub org/user name.
  projectName: 'open-source-portal', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'EG OSS Logo',
        src: 'img/banner.png',
      },
      items: [
        {
          href: 'https://github.com/ExpediaGroup',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ExpediaGroup',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Expedia Group. All rights Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: false,
        blog: false
      },
    ],
  ]
};
