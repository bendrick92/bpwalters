module.exports = {
  siteMetadata: {
    title: `Ben Walters`,
    description: 'Personal website, portfolio, and blog of Ben Walters',
    image: 'src/assets/images/bpwalters.png',
    siteUrl: `https://bpwalters.com`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-anchor-links',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/pages/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 550,
            },
          },
          {
            resolve: `gatsby-remark-images-remote`,
            options: {
              maxWidth: 550,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          }
        ],
      },
    },
    {
      resolve: `@matiasfha/gatsby-plugin-frontmatter-featured-image`,
      options: {
        image: 'image'
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `bpwalters.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/bpwalters.png',
      },
    }
  ],
};