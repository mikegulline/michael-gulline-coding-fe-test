import styles from './header.module.scss'

export default function Header() {
  return (
    <header>
      <div className={styles['logo-banner']}>
        <nav className={styles['left-menu']}>
          <ul>
            <li>M</li>
            <li></li>
          </ul>
        </nav>
        <div>videoshops</div>
        <nav id="right-menu">
          <ul>
            <li>H</li>
            <li>B</li>
          </ul>
        </nav>
      </div>
      <div id="search-form"></div>
      <div id="main-menu"></div>
    </header>
  )
}
