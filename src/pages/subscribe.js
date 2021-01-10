import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SubscribePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Subscribe" location={location} />
      <h1>Subscribe</h1>
      <p>Some things are too unpolished or too personal to say in a blog article. I can be more vulnerable and be wrong more often in an email. Plus, I can receive your direct response.</p>
      <p>If you enjoy reading the things I write, you might like the Heart to Heart newsletter.</p>
      <p>I promise that I will only use it to dispatch emails that I believe are worth your time. Your email address will always be kept private.</p>
      
      <section>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/nickang"
          method="post"
          target="popupwindow"
          onsubmit="window.open('https://buttondown.email/nickang', 'popupwindow')"
          class="embeddable-buttondown-form"
        >
          <input type="email" name="email" id="bd-email" placeholder="enter email"></input>
          <input type="hidden" value="1" name="embed"></input>
          <input type="hidden" value="blog dedicated subscribe page" name="metadata__origin"></input>
          <span>&nbsp;</span>
          <input type="submit" value="Subscribe by email"></input>
        </form>
        <small>
          <a href="https://buttondown.email" target="_blank" rel="noreferrer">Powered by Buttondown.</a>
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
