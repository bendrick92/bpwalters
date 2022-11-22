module.exports = {
  siteMetadata: {
    title: `Ben Walters`,
    siteUrl: `https://bpwalters.com`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-anchor-links',
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
  ],
};