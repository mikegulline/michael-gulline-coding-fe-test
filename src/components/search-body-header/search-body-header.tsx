import styles from './search-body-header.module.scss'

type SearchHeader = {
  title: string
  showing: number
  count: number
}

export default function SearchBodyHeader({
  title,
  showing,
  count,
}: SearchHeader) {
  return (
    <div className={styles['search-header']}>
      <h3>{title}</h3>
      <span>
        {showing} of {count} Results
      </span>
    </div>
  )
}
