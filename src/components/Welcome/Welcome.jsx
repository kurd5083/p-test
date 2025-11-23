import arrow_circle_right from '/src/assets/arrow_circle_right.svg'
import styles from './Welcome.module.scss'

const Welcome = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.welcomeConainer}>
        <div className={styles.welcomeContent}>
          <h1 className={styles.welcomeContentTitle}>Hi, I am Cristian</h1>
          <p className={styles.welcomeContentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at, distinctio totam molestiae officia vitae debitis aut, doloribus soluta illum voluptates excepturi! Animi sunt nesciunt enim provident, iusto debitis est!</p>
          <button className={styles.welcomeContentButton}>¡Test test!
            <img src={arrow_circle_right} alt="arrow right" />
          </button>
        </div>
      </div>

    </section>
  )
}

export default Welcome
