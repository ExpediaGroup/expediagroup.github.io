/*
Copyright 2022 Expedia, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const customFields = {
  heroConfig: {
    title: 'Powering global travel through a world-class tech platform.',
    subtitle: 'Peek behind the scenes at our open source projects.'
  },
  repositoriesConfig: {
    navbarLabel: 'Projects',
    githubReposLink: 'https://github.com/ExpediaGroup',
    exploreMoreText: 'Explore More Projects',
    exploreOnGithubText: 'Explore more on GitHub',
    repositoriesPage: {
      link: '/repositories',
      title: 'Explore our current open source projects.',
      subtitle: 'Discover something new.'
    }
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
  baseUrl: '/',
  organizationName: 'ExpediaGroup',
  projectName: 'expediagroup.github.io',
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
          href: customFields.repositoriesConfig.repositoriesPage.link,
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
