import React from 'react';
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Section from "../components/section"

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Markup = styled.div`
  ${tw`my-2`}
  p {
    ${tw`my-4`}

    em {
      ${tw`w-full text-center block`}
    }
  }
`

export default ({ data }) => {

  const { html, frontmatter: { date, title } } = data.markdownRemark

  return (
    <Layout>
      <Section>
        <div className="w-full flex flex-col">
          <h1 className="text-lg lg:text-3xl my-2">{title}</h1>
          <h5 className="text-sm lg:text-xl my-2">{date}</h5>
          <Markup className="my-2" dangerouslySetInnerHTML={{ __html: html }}></Markup>
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