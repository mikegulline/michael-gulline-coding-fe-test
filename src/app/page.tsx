import Image from 'next/image'
import Link from 'next/link'
import BreadCrumbs from '@/components/bread-crumbs/bread-crumbs'
import Kylie from '../../public/kylie.png'
import Pink from '../../public/pink.png'
import Fenty from '../../public/fenty.png'
import Beauty from '../../public/beauty.png'
import Lips from '../../public/lips.png'
import Eyes from '../../public/eyes.png'
import Skin from '../../public/skin.png'
import Brows from '../../public/brows.png'
import Makeup from '../../public/makeup.png'
import Hair from '../../public/hair.png'
import BeautyTools from '../../public/beauty-tools.png'
import LipCombos from '../../public/lip-combos.png'
import LightweightMakeup from '../../public/lightweight-makeup.png'
import bannerImage from '../../public/banner.png'
import styles from './page.module.scss'

const breadCrumbLinks = [
  { url: '/', title: 'Home' },
  { url: '/', title: 'Marketplace' },
]

const banners = [
  { src: Kylie, url: '/', alt: 'Shop & Sell Kylie' },
  { src: Pink, url: '/', alt: 'Shop & Sell Pink Friday' },
  { src: Fenty, url: '/', alt: 'Shop & Sell Fenty' },
]

const whatYouLove = [
  { src: Beauty, url: '/', alt: 'Beauty' },
  { src: Lips, url: '/', alt: 'Lips' },
  { src: Eyes, url: '/', alt: 'Eyes' },
  { src: Skin, url: '/', alt: 'Skin' },
  { src: Brows, url: '/', alt: 'Brows' },
  { src: Makeup, url: '/', alt: 'Makeup' },
  { src: Hair, url: '/', alt: 'Hair' },
  { src: BeautyTools, url: '/', alt: 'Beauty Tools' },
]

const whatWeLove = [
  { src: LipCombos, url: '/', title: "Lip COMBOS—WE'RE LOVING RIGHT NOW" },
  {
    src: LightweightMakeup,
    url: '/',
    title: 'OUR FAVORITE—LIGHTWEIGHT MAKEUP ROUTINE',
  },
]

export default function Home() {
  return (
    <>
      <BreadCrumbs links={breadCrumbLinks} />
      <main className={styles['home']}>
        <section className={styles['banners']}>
          <ul>
            {banners.map(({ src, alt, url }) => (
              <li key={alt}>
                <Link href={url} title={alt}>
                  <Image src={src} width={480} height={574} alt={alt} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles['trending']}>
          <h2>Trending Products</h2>

          <p>Try searching instead! 🤓</p>
        </section>
        <section className={styles['get-paid-same-day']}>
          <div className={styles['banner']}>
            <Image
              src={bannerImage}
              width={1440}
              height={390}
              alt="Get paid same day"
            />
          </div>
        </section>
        <section className={styles['what-you-love']}>
          <span>Shop &amp; Sell</span>
          <h2>What YOU Love</h2>
          <ul>
            {whatYouLove.map(({ src, alt, url }) => (
              <li key={alt}>
                <Link href={url} title={alt}>
                  <Image src={src} width={360} height={330} alt={alt} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles['what-we-love']}>
          <ul>
            {whatWeLove.map(({ src, title, url }) => {
              const modTitle = title.split('—')
              return (
                <li key={title}>
                  <div>
                    <Link href={url} title={title}>
                      <Image src={src} width={705} height={580} alt={title} />
                    </Link>
                    <h3 className="font-pp-acma">
                      {modTitle[0]}
                      <br />
                      {modTitle[1]}
                    </h3>
                  </div>
                  <Link href={url} className={styles['view-link']}>
                    View Products
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}
