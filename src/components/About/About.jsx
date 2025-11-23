import styles from './About.module.scss'
import responsibility_ico from '/src/assets/responsibility_ico.svg'
import puntuality_ico from '/src/assets/puntuality_ico.svg'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutContentTitle}>Test</h2>
        <div className={styles.aboutBlocks}>
          <div className={styles.aboutBlock}>
            <img src={responsibility_ico} alt="" />
            <h3 className={styles.aboutBlockTitle}>20%</h3>
            <p className={styles.aboutBlockText}>Test</p>
          </div>
          <div className={styles.aboutBlockCenter}>
            <h3 className={styles.aboutBlockTitle}>100%</h3>
            <p className={styles.aboutBlockText}>Colombian</p>
          </div>
          <div className={styles.aboutBlock}>
            <img src={puntuality_ico} alt="" />
            <h3 className={styles.aboutBlockTitle}>20%</h3>
            <p className={styles.aboutBlockText}>Test</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
