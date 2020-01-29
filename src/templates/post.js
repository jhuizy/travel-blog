import React from 'react';
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Section from "../components/section"
import Subscribe from "../components/subscribe"

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

  hr {
    ${tw`ml-auto mr-auto w-1/2`}
    height: 2px;
  }

  a {
    ${tw`text-blue-500 hover:underline`}
  }
`

export default ({ data }) => {

  const { html, frontmatter: { date, title } } = data.markdownRemark

  return (
    <Layout>
      <Section>
        <div className="w-full flex flex-col">
          <h1 className="text-lg lg:text-3xl mt-2">{title}</h1>
          <div className="text-xs lg:text-lg mt-1">{date}</div>
          <Markup className="my-2" dangerouslySetInnerHTML={{ __html: html }}></Markup>
          <hr style={{height: '2px', borderColor: 'black'}}/>
          <Subscribe />
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