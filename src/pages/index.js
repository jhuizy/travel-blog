import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { HeroImage } from "../components/image"
import SEO from "../components/seo"
import PostList from "../components/postlist"
import Button from '../components/button'

import styled from "styled-components"
import tw from "tailwind.macro"

const ImageText = styled.h1`
  ${tw`absolute w-full bottom-0 text-white tracking-widest text-3xl text-bold uppercase`}
`

const ImageContainer = styled.div`
  ${tw`relative w-full text-center`}
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Two Aussie Travellers" />
    <div className="relative w-full text-center">
      <HeroImage />
      {/* <img src={data.headerImage.publicURL} /> */}
      <div className="flex flex-col justfiy-between items-center h-full w-full absolute inset-0">
        <div className="flex-1 flex justify-around items-center">
          <h1 className="border-white border-b-4 py-1 px-4 text-white text-bold text-lg lg:text-3xl tracking-widest uppercase">Always seeking adventure</h1>
        </div>
        <div className="flex-1 flex justify-around items-center">
          <Button className="">Discover</Button>
        </div>
      </div>

    </div>

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
  </Layout>
)

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
    }
  }
`

export default IndexPage
