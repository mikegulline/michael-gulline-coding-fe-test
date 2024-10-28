import styles from './search-body-header.module.scss'

export default function SearchBodyHeader({
  title,
  start,
  end,
  count,
}: SearchHeader) {
  return (
    <header className={styles['search-header']}>
      <h3>{title}</h3>
      <span>
        {start} - {end} of {count}
      </span>
    </header>
  )
}
