import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const RecommendationsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Recommendations" location={location} />
      <h1>Recommendations</h1>
      <p>Be.</p>
      <hr />
      <p><em>Page last updated: 14.12.2020</em></p>
    </Layout>
  )
}

export default RecommendationsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
