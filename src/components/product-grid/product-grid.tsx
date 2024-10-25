import styles from './product-grid.module.scss'

type ProductGrid = {
  children: React.ReactNode
}
export default function ProductGrid({ children }: ProductGrid) {
  return (
    <div>
      <ul className={styles['product-grid']}>{children}</ul>
    </div>
  )
}
