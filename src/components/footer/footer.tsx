import Image from 'next/image'
import Logo from '../logo/logo'
import li from '../../../public/linked-in.svg'
import yt from '../../../public/youtube.svg'
import fb from '../../../public/facebook.svg'
import x from '../../../public/x.svg'

import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['wrapper']}>
        <div className={styles['logo-social']}>
          <Logo />
          <ul>
            <li>
              <Image src={li} width={32} height={32} alt="Linked In" />
            </li>
            <li>
              <Image src={fb} width={32} height={32} alt="Facebook" />
            </li>
            <li>
              <Image src={x} width={32} height={32} alt="X" />
            </li>
            <li>
              <Image src={yt} width={32} height={32} alt="Youtube" />
            </li>
          </ul>
        </div>
        <div className={styles['menus']}>
          <div>
            <p>Company</p>
            <ul>
              <li>About Us</li>
              <li>Create a Shop</li>
              <li>Media</li>
            </ul>
          </div>
          <div>
            <p>Support</p>
            <ul>
              <li>Help Center</li>
              <li>Contact</li>
              <li>For Brands</li>
            </ul>
          </div>
        </div>
        <div className={styles['copy-privacy']}>
          <p>© 2024 NOWwith Ventures Inc. All Rights Reserved.</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
