import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { HeroImage } from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"
import tw from "tailwind.macro"

const IndexPage = () => (
  <Layout>
    <SEO title="Two Aussie Travellers" />
    <HeroImage />
    <h1>Hi</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
