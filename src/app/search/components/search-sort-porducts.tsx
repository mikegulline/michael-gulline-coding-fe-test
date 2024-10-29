'use client'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import { SortIcon } from '@/components/icons'
import paramsToQueryString from '../utils/params-to-query-string'
import styles from '../page.module.scss'

const sortBy = {
  lowPrice: 'Price Low',
  highPrice: 'Price High',
  newest: 'Newest',
  relevance: 'Relevance',
}

export default function SearchSortProducts({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const router = useRouter()
  const ref = useRef<HTMLUListElement>(null)

  const selected = searchParams.sortBy || 'relevance'
  return (
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
      <button>
        <SortIcon />
        <span>Sort</span>
      </button>
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
  )
}
