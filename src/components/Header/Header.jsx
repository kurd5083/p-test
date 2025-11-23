import header_icon from '/src/assets/header_icon.svg'
import burger_icon from '/src/assets/burger_icon.svg'
import styles from './Header.module.scss'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerContentIcon}>
          <img src={header_icon} alt="header icon" />
          <p>Lorem, ipsum.</p>
        </div>
        <nav>
          <ul className={styles.headerContentList}>
            <li><a href="/">Test</a></li>
            <li><a href="/">Test</a></li>
            <li><a href="/">Test</a></li>
            <li><a href="/">Test</a></li>
          </ul>
        </nav>
        <button className={styles.headerContentButton}>Test test</button>
        <button className={styles.headerContentBurger}>
          <img src={burger_icon} alt="" />
        </button>
      </div>
    </header>
  )
}

export default Header
