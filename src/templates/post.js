import React from 'react';
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Section from "../components/section"

export default ({ data }) => {

  const { html, frontmatter: { date, title } } = data.markdownRemark

  return (
    <Layout>
      <Section>
        <div className="w-full flex flex-col">
          <h1 className="text-lg lg:text-3xl my-2">{title}</h1>
          <h5 className="text-sm lg:text-xl my-2">{date}</h5>
          <div className="my-2" dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`