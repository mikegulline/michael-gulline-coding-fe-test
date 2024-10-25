import Image from 'next/image'
import Hamburger from '../../../public/icon-hamburger.svg'
import Heart from '../../../public/icon-heart.svg'
import Cart from '../../../public/icon-cart.svg'
import ChevronDown from '../../../public/icon-chevron-down.svg'
import Search from '../../../public/icon-search.svg'
import SameDayPay from '../../../public/icon-same-day.svg'
import FaveHeart from '../../../public/icon-fave-heart.svg'
import styles from './icons.module.scss'

export function HamburgerIcon() {
  return (
    <Image src={Hamburger} alt="Menu icon" className={styles['header-icon']} />
  )
}

export function HeartIcon() {
  return (
    <Image src={Heart} alt="Heart icon" className={styles['header-icon']} />
  )
}

export function CartIcon() {
  return <Image src={Cart} alt="Cart icon" className={styles['header-icon']} />
}

export function ChevronDownIcon() {
  return (
    <Image src={ChevronDown} alt="Down icon" className={styles['menu-icon']} />
  )
}

export function SearchIcon() {
  return (
    <Image src={Search} alt="Search icon" className={styles['search-icon']} />
  )
}

export function SameDayPayIcon() {
  return (
    <Image
      src={SameDayPay}
      alt="Same day pay icon"
      className={styles['same-day-pay-icon']}
    />
  )
}

export function FaveHeartIcon() {
  return (
    <Image
      src={FaveHeart}
      alt="Fave Heart icon"
      className={styles['fave-heart-icon']}
    />
  )
}
