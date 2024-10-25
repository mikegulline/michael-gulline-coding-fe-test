import Logo from '@/components/logo/logo'
import { HamburgerIcon, HeartIcon, CartIcon } from '@/components/icons/'
import SearchForm from './search-form'
import MainMenu from './main-menu'
import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles['site-header']}>
      <div className={styles['site-header__logo-banner']}>
        <nav className={styles['site-header__left-menu']}>
          <ul>
            <li>
              <HamburgerIcon />
            </li>
            <li></li>
          </ul>
        </nav>
        <div className={styles['site-header__logo']}>
          <Logo />
        </div>
        <nav className={styles['site-header__right-menu']}>
          <ul>
            <li>
              <HeartIcon />
            </li>
            <li>
              <CartIcon />
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles['site-header__search-form']}>
        <SearchForm />
      </div>
      <div className={styles['site-header__main-menu']}>
        <MainMenu />
      </div>
    </header>
  )
}
