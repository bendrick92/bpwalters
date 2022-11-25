const path = require(`path`);
const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      featuredImage: File @link(from: "fields.localFile")
    }

    type Frontmatter {
      title: String!
      featuredImage: String
      featuredImageAlt: String
    }
  `);
};

exports.onCreateNode = async ({ node, actions, createNodeId, getNode, getCache }) => {
  const { createNodeField, createNode } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // Featured image configuration
    if (node.frontmatter.featuredImage) {
      const fileNode = await createRemoteFileNode({
        url: node.frontmatter.featuredImage, // string that points to the URL of the image
        parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
        createNode, // helper function in gatsby-node to generate the node
        createNodeId, // helper function in gatsby-node to generate the node id
        getCache
      });

      // if the file was created, extend the node with "localFile"
      if (fileNode) {
        createNodeField({
          node,
          name: 'localFile',
          value: fileNode.id
        });
      }
    }

    // Slug configuration
    const value = createFilePath({ node, getNode });
    const dateRegex = /\/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))-/g;  // Ex. "1992-01-01-" prefix of file name

    let sanValue = value.replace(dateRegex, '/');

    createNodeField({
      name: `slug`,
      node,
      value: sanValue,
    });

    const parent = getNode(node.parent);
    let collection = parent.sourceInstanceName;

    createNodeField({
      node,
      name: 'collection',
      value: collection,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await buildBlogPosts(graphql, createPage);
  await buildProjects(graphql, createPage);
};

const buildBlogPosts = async (graphql, createPage) => {
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);

  let searchResults = await graphql(`{
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(blog)/"}}
      sort: {frontmatter: {date: DESC}}
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }`);

  let blogPosts = searchResults.data.allMarkdownRemark.edges;

  blogPosts.forEach((post, index) => {
    createPage({
      path: 'blog' + post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
      },
    });
  });
};

const buildProjects = async (graphql, createPage) => {
  const projectTemplate = path.resolve(`./src/templates/project.js`);

  let searchResults = await graphql(`{
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(projects)/"}}
      sort: {frontmatter: {date: DESC}}
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }`);

  let projects = searchResults.data.allMarkdownRemark.edges;

  projects.forEach((post, index) => {
    createPage({
      path: 'projects' + post.node.fields.slug,
      component: projectTemplate,
      context: {
        slug: post.node.fields.slug,
      },
    });
  });
};