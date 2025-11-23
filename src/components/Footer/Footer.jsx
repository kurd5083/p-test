import facebook from '/src/assets/social/facebook.svg'
import instagram from '/src/assets/social/instagram.svg'
import linkedin from '/src/assets/social/linkedin.svg'
import twitter from '/src/assets/social/twitter.svg'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <nav>
          <ul className={styles.footerContentList}>
            <li><a href="/"><img src={facebook} alt="" /></a></li>
            <li><a href="/"><img src={instagram} alt="" /></a></li>
            <li><a href="/"><img src={linkedin} alt="" /></a></li>
            <li><a href="/"><img src={twitter} alt="" /></a></li>
          </ul>
        </nav>
        <p className={styles.footerContentCopyright}>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </footer>
  )
}

export default Footer
