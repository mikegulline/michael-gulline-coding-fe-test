import Link from 'next/link'
import { ChevronDownIcon } from '@/components/icons/'
import styles from './header.module.scss'

type MenuItem = {
  title: string
  href: string
}
//Marketplace
const menuData: MenuItem[] = [
  { title: 'Brands A-Z', href: '/' },
  { title: 'Makeup', href: '/' },
  { title: 'Hair', href: '/' },
  { title: 'Skincare', href: '/' },
  { title: 'Nails', href: '/' },
  { title: 'Tools & Brushes', href: '/' },
  { title: 'Fragrance', href: '/' },
  { title: 'Body', href: '/' },
]

export default function MainMenu() {
  return (
    <ul>
      <li className={styles['dropdown']}>
        <span>Marketplace</span>
        <ChevronDownIcon />
      </li>
      {menuData.map((menuItem) => (
        <li className="" key={`main menu ${menuItem.title}`}>
          <Link {...menuItem}>{menuItem.title}</Link>
        </li>
      ))}
    </ul>
  )
}
