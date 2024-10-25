import styles from './search-header.module.scss'

type SearchHeader = {
  title: string
  count: number
}

export default function SearchHeader({ title, count }: SearchHeader) {
  return (
    <div className={styles['search-header']}>
      <h3>{title}</h3>
      <span>{count} Results</span>
    </div>
  )
}
