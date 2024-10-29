'use client'
import { useRouter } from 'next/navigation'
import ProductCard from '@/components/product-card/product-card'
import ProductGrid from '@/components/product-grid/product-grid'
import paramsToQueryString from '../utils/params-to-query-string'
import styles from '../page.module.scss'

const productsPerPage = 50

export default function SearchResultsProducts({
  products,
  meta,
  searchParams,
}: SearchResultsProducts) {
  const router = useRouter()
  const offsetNumber = Number(meta.offset)

  const handleLoadMore = () => {
    const newParams = { ...searchParams }
    newParams['offset'] = offsetNumber + productsPerPage
    const queryString = paramsToQueryString(newParams)
    router.push(`/search?${queryString}`)
  }

  const handleBack = () => {
    const newParams = { ...searchParams }
    newParams['offset'] = offsetNumber - productsPerPage
    const queryString = paramsToQueryString(newParams)
    router.push(`/search?${queryString}`)
  }

  const start = offsetNumber + 1
  const end = offsetNumber + products.length

  return (
    <article className={styles['search__body__section__article']}>
      <div className={styles['search__body__section__article-wrapper']}>
        <header>
          <h3>Products</h3>
          <span>
            {start} - {end} of {meta.totalHits}
          </span>
        </header>
        <ProductGrid>
          {products?.map((product: FilteredProduct) => (
            <ProductCard key={product.productId} {...product} />
          ))}
        </ProductGrid>
      </div>
      <footer>
        {offsetNumber > 0 && <button onClick={handleBack}>Back</button>}
        {meta.hasMore && <button onClick={handleLoadMore}>Load More</button>}
      </footer>
    </article>
  )
}
