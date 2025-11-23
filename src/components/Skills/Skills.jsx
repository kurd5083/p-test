import styles from './Skills.module.scss'

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skillsContent}>
        <div className={styles.skillsContentHead}>
          <h2 className={styles.skillsContentTitle}>Test</h2>
        </div>
        <div className={styles.skillsContentBlocks}>
          <div className={styles.skillsContentBlock}>
            <p className={styles.skillsContentCircle} style={{background: 'conic-gradient(#7579FF 20%, #EDEEFF 0)'}}>20%</p>
            <h3 className={styles.skillsContentText}>Lorem, ipsum.</h3>
          </div>
          <div className={styles.skillsContentBlock}>
            <p className={styles.skillsContentCircle} style={{background: 'conic-gradient(#7579FF 10%, #EDEEFF 0)'}}>10%</p>
            <h3 className={styles.skillsContentText}>Lorem, ipsum.</h3>
          </div>
          <div className={styles.skillsContentBlock}>
            <p className={styles.skillsContentCircle} style={{background: 'conic-gradient(#7579FF 50%, #EDEEFF 0)'}}>50%</p>
            <h3 className={styles.skillsContentText}>Lorem, ipsum.</h3>
          </div>
          <div className={styles.skillsContentBlock}>
            <p className={styles.skillsContentCircle} style={{background: 'conic-gradient(#7579FF 60%, #EDEEFF 0)'}}>60%</p>
            <h3 className={styles.skillsContentText}>Lorem, ipsum.</h3>
          </div>
        </div>
        <div className={styles.skillsContentBlocks}>
          <div className={styles.skillsContentBlock}>
            <p className={styles.skillsContentCircle} style={{background: 'conic-gradient(#7579FF 20%, #EDEEFF 0)'}}>20%</p>
            <h3 className={styles.skillsContentText}>Lorem, ipsum.</h3>
          </div>
          <div className={styles.skillsContentBlock}>
            <p className={styles.skillsContentCircle} style={{background: 'conic-gradient(#7579FF 10%, #EDEEFF 0)'}}>10%</p>
            <h3 className={styles.skillsContentText}>Lorem, ipsum.</h3>
          </div>
          <div className={styles.skillsContentBlock}>
            <p className={styles.skillsContentCircle} style={{background: 'conic-gradient(#7579FF 50%, #EDEEFF 0)'}}>50%</p>
            <h3 className={styles.skillsContentText}>Lorem, ipsum.</h3>
          </div>
          <div className={styles.skillsContentBlock}>
            <p className={styles.skillsContentCircle} style={{background: 'conic-gradient(#7579FF 20%, #EDEEFF 0)'}}>20%</p>
            <h3 className={styles.skillsContentText}>Lorem, ipsum.</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
