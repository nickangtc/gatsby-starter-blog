import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import { articles, navItem } from "./index.module.scss"
import SearchEngineOptimisation from '../components/searchengineoptimisation'

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const newestPostsData = data.allMarkdownRemark.edges
  const newestPosts = newestPostsData.map((post, index) => {
    return (
      <li key={index}>
        { post.node.frontmatter.date } - <Link to={ post.node.fields.slug }>{ post.node.frontmatter.title }</Link>
      </li>
    )
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Home" location={location} />
      <h1 id="my-digital-garden">Hey, I'm Nick. <span role="img" aria-label="hand wave emoji">👋</span></h1>
      <p>I'm an Engineering Team Lead at <a href="https://smartly.io">Smartly.io</a>. I write about a broad range of things that I learn and observe, although they seem to coalesce around topics like tech, living a meaningful life, and communicating well.</p>
      <p>New articles published every Sunday. <Link to="/subscribe">Subscribe</Link> for free occasional updates.</p>
      <p>If you're new here and not sure where to start, I recommend reading something recent below or <Link to="/topics">browsing by topic</Link>.</p>

      <h3>Recent articles</h3>
      <ul className={ articles }>
        { newestPosts }
      </ul>
      <nav>
        <p><Link to="/blog" className={ navItem }>Browse all articles →</Link></p>
      </nav>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { status: { ne: "draft" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 8
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMM")
          }
        }
      }
    }
  }
`
