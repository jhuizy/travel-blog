import React, { useRef } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { HeroImage } from "../components/image"
import Section from "../components/section"
import PostList from "../components/postlist"
import Button from '../components/button'
import InstagramList from "../components/instagramlist"
import Subscribe from '../components/subscribe'

import { scrollToRef } from "../utils/scroll"

import styled from "styled-components"
import tw from "tailwind.macro"

const IndexPage = ({ data }) => {

  console.log(`data = ${JSON.stringify(data, null, 2)}`);

  const homeRef = useRef(null)
  const postsRef = useRef(null)
  const instagramRef = useRef(null)
  const contactRef = useRef(null)
  const subscribeRef = useRef(null)

  return (
    <Layout>
      <div id="home" className="relative w-full text-center" ref={homeRef}>
        <HeroImage />
        <div className="flex flex-col justfiy-between items-center h-full w-full absolute inset-0">
          <div className="flex-1 flex justify-around items-center">
            <h1 className="border-white border-b-4 py-1 px-4 text-white text-bold text-sm md:text-lg lg:text-3xl tracking-widest uppercase">Always seeking adventure</h1>
          </div>
          <div className="flex-1 flex justify-around items-center">
            <Button onClick={(e) => scrollToRef(postsRef)}>Discover</Button>
          </div>
        </div>

      </div>
      <Section id="posts" ref={postsRef}>
        {/* <PostList
          posts={data.blogPosts.edges.map(edge => ({
            category: edge.node.frontmatter.date,
            title: edge.node.frontmatter.title,
            excerpt: edge.node.frontmatter.description,
            image: edge.node.frontmatter.image.childImageSharp.fluid,
            slug: edge.node.frontmatter.title.replace(/ /g, '-').toLowerCase()
          }))}
        /> */}
        <PostList
          posts={data.wordpressPosts.edges.map(edge => ({
            category: edge.node.date,
            title: edge.node.title,
            excerpt: edge.node.excerpt,
            image: edge.node.featuredImageFile.childImageSharp.fluid,
            slug: edge.node.slug
          }))}
        />
      </Section>
      <div id="instagram" className="pt-4 min-h-screen w-full" ref={instagramRef}>
        <InstagramList
          posts={data.instagrams.edges.map(edge => ({
            id: edge.node.id,
            likes: edge.node.likes,
            comments: edge.node.comments,
            image: edge.node.localFile.childImageSharp.fluid
          }))}
        />
      </div>
      <div id="subscribe" className="pt-4 min-h-screen w-full" ref={subscribeRef}>
        <Subscribe />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    blogPosts: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 10) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    },
    wordpressPosts: allWordpressPost(sort: {fields: date, order: DESC}, limit: 3) {
      edges {
        node {
          date(formatString: "DD MMMM YYYY")
          excerpt
          slug
          title
          featuredImageFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    },
    instagrams: allInstaNode(limit: 8, sort: {fields: timestamp, order: DESC}) {
      edges {
        node {
          id
          likes
          comments
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
