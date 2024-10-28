import Link from 'next/link'
import styles from './bread-crumbs.module.scss'

export type BreadCrumbs = {
  links: Array<{
    title: string
    url: string
  }>
}

export default function BreadCrumbs({ links }: BreadCrumbs) {
  return (
    <nav aria-label="breadcrumb" className={styles['bread-crumbs']}>
      <ol>
        {links.map((link, index) => {
          const ModLink = ({ children }: { children: React.ReactNode }) =>
            index === links.length - 1 ? (
              <Link
                href={link.url}
                className={styles['last']}
                aria-current="page"
              >
                {children}
              </Link>
            ) : (
              <Link href={link.url}>{children}</Link>
            )
          return (
            <li key={link.title}>
              {index > 0 && <span>/</span>}
              <ModLink>{link.title}</ModLink>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
