'use client'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { SearchIcon } from '@/components/icons'
import styles from './header.module.scss'

export default function SearchForm() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [isBlur, setIsBlur] = useState(true)

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    router.push(`/search?query=${searchTerm}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsBlur(false)}
        onBlur={() => setIsBlur(true)}
      />
      <label
        htmlFor="search"
        className={!isBlur || searchTerm ? styles['label-hidden'] : ''}
      >
        <SearchIcon />
        <span>Search by Brand, Product, or Category</span>
      </label>
    </form>
  )
}
