/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node);

  // RSS feed config
  // https://www.gatsbyjs.org/docs/adding-an-rss-feed/

  // const { createNodeField } = actions
  // if (node.internal.type === `MarkdownRemark`) {
  //   const value = createFilePath({ node, getNode })
  //   createNodeField({
  //     name: node.frontmatter.title.replace(/ /g, '-').toLowerCase(),
  //     node,
  //     value,
  //   })
  // }
};
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.title.replace(/ /g, '-').toLowerCase(),
      component: blogPostTemplate,
      context: {
        title: node.frontmatter.title,
      }, // additional data can be passed via context
    })
  })
}