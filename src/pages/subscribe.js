import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SearchEngineOptimisation from "../components/searchengineoptimisation"

const SubscribePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SearchEngineOptimisation title="Subscribe" location={location} />
      <h1>Subscribe</h1>
      <p>If you enjoy reading this blog, you might like the <strong>Heart to Heart newsletter</strong>. When it lands in your inbox, you can expect:</p>
      <ul>
        <li>1 meaningful, unpolished idea (shortform) shared from my heart to yours</li>
        <li>2-3 things I have read/seen/heard about that I think are worth sharing</li>
      </ul>
      <p>Just one caveat: I haven't figured a format that clicks with email. So subscribe only if you really don't mind any email from me!</p>
      <p>You can find previous issues <a href="https://buttondown.email/nickang/archive" target="_blank" rel="noreferrer">here</a>.</p>
      
      <section>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/nickang"
          method="post"
          target="popupwindow"
          onSubmit={() => window.open('https://buttondown.email/nickang', 'popupwindow')}
          className="embeddable-buttondown-form"
        >
          <input type="email" name="email" id="bd-email" placeholder="Your email address"></input>
          <input type="hidden" value="1" name="embed"></input>
          <input type="hidden" value="blog dedicated subscribe page" name="metadata__origin"></input>
          <span>&nbsp;</span>
          <input type="submit" value="Subscribe"></input>
        </form>
        <small>
          <a href="https://buttondown.email" target="_blank" rel="noreferrer" style={{color:'black'}}>Powered by Buttondown.</a>
          <p>Your email address will always be kept private.</p>
        </small>
      </section>
    </Layout>
  )
}

export default SubscribePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
