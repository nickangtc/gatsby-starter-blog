import React from 'react'

import footerStyles from './footer.module.scss'
import twitterLogo from '../../content/assets/twitter.svg'

const Footer = () => {
  return (
    <footer className={ footerStyles.siteFooter }>
      <p>Nick Ang © {new Date().getFullYear()}</p>
      <a href="https://twitter.com/nickang" target="_blank" rel="noopener noreferrer">
        <img alt="twitter icon" src={twitterLogo} />
      </a>
    </footer>
  )
}

export default Footer