import React from 'react'
import styles from './css/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.footerText}>Contact our support <a href="mailto:support@usefulsites.net">support@usefulsites.net</a></h1>
    </footer>
  )
}

export default Footer
