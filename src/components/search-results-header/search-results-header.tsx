'use client'
import { useRouter } from 'next/navigation'
import { useRef, MouseEvent } from 'react'
import paramsToQueryString from '@/app/search/assets/params-to-query-string'
import Link from 'next/link'
import { SortIcon } from '../icons'
import styles from './search-results-header.module.scss'

type SearchResultsHeader = {
  searchParams: SearchParams
}

const sortBy = {
  lowPrice: 'Price Low',
  highPrice: 'Price High',
  newest: 'Newest',
  relevance: 'Relevance',
}

export default function SearchResultsHeader({
  searchParams,
}: SearchResultsHeader) {
  const handleSort = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
  }
  const router = useRouter()
  const ref = useRef<HTMLUListElement>(null)

  const selected = searchParams.sortBy || 'relevance'

  return (
    <header className={styles['search-results-header']}>
      <h1 className="font-pp-acma">&ldquo;{searchParams?.query}&rdquo;</h1>
      <div
        className={styles['sort-dropdown']}
        onMouseLeave={() => {
          if (ref.current) {
            ref.current.classList.remove(styles['show'])
          }
        }}
        onClick={() => {
          if (ref.current) {
            if (ref.current.classList.contains(styles['show'])) {
              ref.current.classList.remove(styles['show'])
            } else {
              ref.current.classList.add(styles['show'])
            }
          }
        }}
      >
        <Link href="" onClick={handleSort}>
          <SortIcon />
          <span>Sort</span>
        </Link>
        <ul ref={ref}>
          {Object.entries(sortBy).map(([key, value]) => (
            <li key={key}>
              <button
                onClick={() => {
                  const newParams = { query: searchParams.query, sortBy: key }
                  const queryString = paramsToQueryString(newParams)
                  router.push(`/search?${queryString}`)
                }}
                className={key === selected ? styles['selected'] : ''}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
