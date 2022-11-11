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
            resolve: `gatsby-remark-images-remote`,
            options: {
              maxWidth: 750,
            },
          },
        ],
      },
    },
    {
      resolve: `@matiasfha/gatsby-plugin-frontmatter-featured-image`,
      options: {
        image: 'image'
      },
    },
  ],
};