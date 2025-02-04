require("dotenv").config({
  path: `.env`,
})

const _ = require('lodash')

// ignore self signed cert error for connecting to wordpress
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

module.exports = {
  siteMetadata: {
    title: `Two Travelling Aussies`,
    description: `Two travelling aussies on an adventure around the world`,
    author: `Jordan Huizenga`,
    siteUrl: `https://twotravellingaussies.com/`,
    googleSiteVerification: 'EjT6ZOk_sCjeAn32Y4f8WeuhnU1t6DTkDMrWlUvEdWc'

  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Two Travelling Aussies`,
        short_name: `tta`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpeg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `twotravellingaussies`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'demo.wp-api.org' or 'www.example-site.com'
         */
        baseUrl: `travelblog.jhuizy.com`,
        verbose: true,
        // The protocol. This can be http or https.
        protocol: `https`,
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
        // This feature is untested for sites hosted on WordPress.com
        useACF: false,
        jwt_user: process.env.JWT_USER,
        jwt_pass: process.env.JWT_PASSWORD,
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `twotravellingaussies.wordpress.com`,
              protocol: `https`,
              maxWidth: 590,
            }
          }
        ]
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `netlify`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-156928303-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gmail.us4.list-manage.com/subscribe/post?u=ceb80d2c22f485da453453c1c&amp;id=0ec6199809',
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
            {
              site {
                siteMetadata {
                  title
                  description
                  siteUrl
                  site_url: siteUrl
                }
              }
            }
          `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark, allWordpressPost } }) => {
              const markdownPosts = allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  url: site.siteMetadata.siteUrl + "/" + edge.node.frontmatter.title.replace(/ /g, '-').toLowerCase(),
                  guid: site.siteMetadata.siteUrl + "/" + edge.node.frontmatter.title.replace(/ /g, '-').toLowerCase(),
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })

              const wordpressPosts = allWordpressPost.edges.map(edge => {
                return {
                  title: edge.node.title,
                  date: edge.node.date,
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + "/" + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + "/" + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.content }]
                }
              })

              return _.sortBy([...markdownPosts, ...wordpressPosts], post => new Date(post.date)).reverse()
            },
            query: `
                {
                  allMarkdownRemark(
                    sort: { order: DESC, fields: [frontmatter___date] },
                  ) {
                    edges {
                      node {
                        html
                        frontmatter {
                          title
                          date
                          description
                        }
                      }
                    }
                  },
                  allWordpressPost(sort: {fields: date, order: DESC}) {
                    edges {
                      node {
                        date(formatString: "DD MMMM YYYY")
                        excerpt
                        slug
                        title
                        content
                      }
                    }
                  }
                }
              `,
            output: "/rss.xml",
          },
        ],
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

  ],
}
