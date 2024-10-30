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
  {
    logo: Kylie,
    src: 'https://s3-figma-videos-production-sig.figma.com/video/1007673253409586547/TEAM/b8de/217b/-e307-4355-bb4b-b58d620a5e41?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y8SFawHxYP~r~6hftz51wVISrCqePjOM1Verh7M3tFaM9XpdVZwV5wCl6b60NCrdE~IAL9dzK2eYn4ADAd~LukzbeifC8VbB67v0I7REKmTufNDs1R50Mrq6yYKXXUnWTjJ24hfbYx-dbQ73t-lZDtigAcg~UaRRU56j3vlOS9u6kc5DWq1xZ5R3m-iriQ8VNjPcy3KW9-wEFaIeN5bNq1Levi1u7B-1QRbCu-Bm62L~-22jBIlJ7zB1GX7mOkfNAGwr~plmnJgOQJCEjm57aYJ5fxBkhMgYPdnkMn5k3Kb87AmoRotSuAGL~nA2bTHLtd3rfqn85sdOK0T3ncey9g__',
    url: '/',
    alt: 'Shop & Sell Kylie',
  },
  {
    logo: Pink,
    src: 'https://s3-figma-videos-production-sig.figma.com/video/1007673253409586547/TEAM/f66f/8f94/-fe7d-4628-a071-12b17cd1d388?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TN6Ct1KVlZn9hAGjdI3XRFIZcpYgAfn1ytvfdo~-X8U~29Frr9L2RrwqgIzI3KdhblmEa6FNxwAkynpvZDvHVoZdQcMK26LLu6a-YdMdIb9pYtJreZgpu8P8cuVJNvHi-qka2XBk~4IebPskZ3pEZcZCKWAgoeykfOO2nfF0EDhx1tuqAfjWY2nxI4qGumBlCqDrpe4hjOnQNEFyIXTHu3axCmWX17P8bO1fxSZfaA6topUPAX~KFKdRYLpzUrDuytOe5K7jUzsrBKRkDsFWw8rr54BNOAzMP9CjSVHbZ~FODTKa8TiPEcxtkWEhEFa~s~M2HW74zSLguZ~k~cpyKw__',
    url: '/',
    alt: 'Shop & Sell Pink Friday',
  },
  {
    logo: Fenty,
    src: 'https://s3-figma-videos-production-sig.figma.com/video/1007673253409586547/TEAM/0b4a/5893/-8342-4948-9f6e-05c4f052ce05?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cL0raaxnSTEACNHJrS7j3yQ7HxTo3goLObSp37414bxFpZtsqj7nnt3UNvb4mnsBWGKCyIh0Sr9QM6IDZt7OlO2KQ63EDqH8kJPlrhdcr5E9MWTXWYm1k68v41tpVvsg~~pMZPFfbfGmt-3aB5lIgu~dYUHKkXWVoJLfaCxszpyOHDjTz3wdvle3egfUSlajsiD8rtpO7JmbqKVa93nVlHqX~1i1UTnG5QZcgNaj1SoxZ~06~qeoBNo9Du0T6fSOnbiNs749ApvtkvhX87bZWNwm3UnZyGFXrjbMA3a1qmLzUY1YgWLpx0xjZCn~-bDKXBuHV3f5OB51tGop6v0zNA__',
    url: '/',
    alt: 'Shop & Sell Fenty',
  },
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
            {banners.map(({ logo, src, alt, url }) => (
              <li key={alt}>
                <Link href={url} title={alt}>
                  <video autoPlay muted loop>
                    <source src={src} type="video/mp4" />
                  </video>
                  <div className={styles['overlay']}>
                    <div>
                      <p>Shop &amp; Sell</p>
                      <Image src={logo} width={408} height={100} alt={alt} />
                    </div>
                  </div>
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
