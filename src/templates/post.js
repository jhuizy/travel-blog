import React from 'react';
import { graphql } from 'gatsby'

import Header from "../components/header"

export default ({ data }) => {

  const { html, frontmatter: { date, title } } = data.markdownRemark 

  return (  
    <div>
      <Header siteTitle="Two Travelling Aussies" />

      <h1>{title}</h1>
      <h5>{date}</h5>

      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </div>
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