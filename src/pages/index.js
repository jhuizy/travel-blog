import React, { useRef } from "react"
import { Link, graphql } from "gatsby"

import { useScroll } from 'react-use'

import Layout from "../components/layout"
import { HeroImage } from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import PostList from "../components/postlist"
import Button from '../components/button'
import InstagramList from "../components/instagramlist"
import Contact from '../components/contact'

import styled from "styled-components"
import tw from "tailwind.macro"

const ImageText = styled.h1`
  ${tw`absolute w-full bottom-0 text-white tracking-widest text-3xl text-bold uppercase`}
`

const ImageContainer = styled.div`
  ${tw`relative w-full text-center`}
`

const IndexPage = ({ data }) => {

  const homeRef = useRef(null)
  const postsRef = useRef(null)
  const instagramRef = useRef(null)
  const contactRef = useRef(null)


  return (
    <Layout>
      <SEO title="Two Aussie Travellers" />
      <Header 
        siteTitle="Two Aussie Travellers" 
        homeRef={homeRef}
        postsRef={postsRef}
        instagramRef={instagramRef}
        contactRef={contactRef}
        />
      <div id="home" className="relative w-full text-center" ref={homeRef}>
        <HeroImage />
        <div className="flex flex-col justfiy-between items-center h-full w-full absolute inset-0">
          <div className="flex-1 flex justify-around items-center">
            <h1 className="border-white border-b-4 py-1 px-4 text-white text-bold text-lg lg:text-3xl tracking-widest uppercase">Always seeking adventure</h1>
          </div>
          <div className="flex-1 flex justify-around items-center">
            <Button className="">Discover</Button>
          </div>
        </div>

      </div>
      <div id="posts" ref={postsRef}>
        <PostList
          posts={[
            {
              category: "Travel",
              title: "Exploring the wilds",
              excerpt: "Veritatis iusto commodi magni quibusdam molestiae. Eaque neque ea sapiente eum est. Fuga nobis et pariatur. Quisquam laudantium expedita necessitatibus. Ut vel dolorem deserunt dignissimos qui in. Aspernatur consequuntur nostrum at aperiam.",
              image: data.image.childImageSharp.fluid
            },
            {
              category: "Other",
              title: "Getting to know the locals",
              excerpt: "Veritatis iusto commodi magni quibusdam molestiae. Eaque neque ea sapiente eum est. Fuga nobis et pariatur. Quisquam laudantium expedita necessitatibus. Ut vel dolorem deserunt dignissimos qui in. Aspernatur consequuntur nostrum at aperiam.",
              image: data.image.childImageSharp.fluid
            }
          ]}
        />
      </div>
      <div id="instagram" className="pt-4 min-h-screen" ref={instagramRef}>
        <InstagramList
          posts={data.instagrams.edges.map(edge => ({
            id: edge.node.id,
            likes: edge.node.likes,
            comments: edge.node.comments,
            image: edge.node.localFile.childImageSharp.fluid
          }))}
        />
      </div>
      <div id="contact" className="pt-4 min-h-screen" ref={contactRef}>
        <Contact />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "hero.jpg" }) {
      publicURL
    },
    image: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
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
