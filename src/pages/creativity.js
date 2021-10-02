import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const CreativityPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const creativityPosts = data.allMarkdownRemark.edges.map((post, index) => {
    return (
      <li key={index}>
        { post.node.frontmatter.date } - <Link to={ post.node.fields.slug }>{ post.node.frontmatter.title }</Link>
        { post.node.frontmatter.fav && (<span role="img" aria-label="fire emoji indicating this article is a favourite"> 🔥</span>) }
      </li>
    )
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Creativity Articles" location={location} />
      <h1>Creativity articles</h1>
      <p>Articles about writing, blogging, visual thinking, problem solving, and just about anything creative.</p>
      <ul>
        { creativityPosts }
      </ul>
    </Layout>
  )
}

export default CreativityPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "Creativity" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            fav
            date(formatString: "DD MMM YYYY")
          }
        }
      }
    }
  }
`
