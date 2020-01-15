import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { FluidImage } from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"
import tw from "tailwind.macro"

const IndexPage = () => (
  <Layout>
    <SEO title="Two Aussie Travellers" />
    <h1>Hi</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image filepath="gatsby-astronaut.jpg" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
