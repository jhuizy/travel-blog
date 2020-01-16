import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { HeroImage } from "../components/image"
import SEO from "../components/seo"
import PostList from "../components/postlist"

import styled from "styled-components"
import tw from "tailwind.macro"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Two Aussie Travellers" />
    <HeroImage />
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
