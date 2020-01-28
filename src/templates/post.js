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

export const HTMLContent = ({ content, className }) => (
  <Markup className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

export const Content = ({ content, className }) => (
  <Markup className={className}>{content}</Markup>
)

export const BlogPostTemplate = ({ title, date, html, component }) => {

  const MarkupComponent = component || Content

  return (
    <Section>
      <div className="w-full flex flex-col">
        <h1 className="text-lg lg:text-3xl my-2">{title}</h1>
        <h5 className="text-sm lg:text-xl my-2">{date}</h5>
        <MarkupComponent className="my-2" content={html} />
      </div>
    </Section>
  )
}

export default ({ data }) => {

  const { html, frontmatter: { date, title } } = data.markdownRemark

  return (
    <Layout>
      <BlogPostTemplate
        title={title}
        date={date}
        html={html}
        component={HTMLContent}
      />
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