import Logo from '@/components/logo/logo'
import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles['site-header']}>
      <div className={styles['site-header__logo-banner']}>
        <nav className={styles['site-header__left-menu']}>
          <ul>
            <li>M</li>
            <li></li>
          </ul>
        </nav>
        <div className={styles['site-header__logo']}>
          <Logo />
        </div>
        <nav className={styles['site-header__right-menu']}>
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
