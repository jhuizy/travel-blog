/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node);
};
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/post.js`)
  const wordpressPostTemplate = path.resolve(`src/templates/wordpressPost.js`)

  const wordpressResults = await graphql(`
    {
      allWordpressPost(sort: { fields: [date] }) {
        edges {
          node {
            title
            excerpt
            content
            slug
          }
        }
      }
    }
  `)

  // Handle errors
  if (wordpressResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  wordpressResults.data.allWordpressPost.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: wordpressPostTemplate,
      context: {
        slug: node.slug,
      }, // additional data can be passed via context
    })
  })

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

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
exports.createResolvers = (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions
  createResolvers({
    wordpress__POST: {
      featuredImageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.jetpack_featured_media_url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}