'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ProductCard from '@/components/product-card/product-card'
import ProductGrid from '@/components/product-grid/product-grid'
import SearchBodyHeader from '@/components/search-body-header/search-body-header'
import paramsToQueryString from './params-to-query-string'
import styles from '../page.module.scss'

const productsPerPage = 50

export default function SearchResults({
  products,
  meta,
  searchParams,
}: SearchResults) {
  const router = useRouter()
  const { hasMore, offset, totalHits } = meta

  const handleLoadMore = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()
    const newParams = { ...searchParams }
    newParams['offset'] = Number(offset) + productsPerPage
    const queryString = paramsToQueryString(newParams)
    router.push(`/search?${queryString}`)
  }

  const handleBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const newParams = { ...searchParams }
    newParams['offset'] = Number(offset) - productsPerPage
    const queryString = paramsToQueryString(newParams)
    router.push(`/search?${queryString}`)
  }

  return (
    <div className={styles['search-page__body']}>
      <aside className={styles['search-page__body-aside']}></aside>
      <section className={styles['search-page__body-section']}>
        <article className={styles['search-page__body-section__more-wrapper']}>
          <div className={styles['search-page__body-section__results-wrapper']}>
            <SearchBodyHeader
              title="Products"
              start={Number(offset) + 1}
              end={Number(offset) + products.length}
              count={totalHits}
            />
            <ProductGrid>
              {products?.map((product: FilteredProduct) => (
                <ProductCard key={product.productId} {...product} />
              ))}
            </ProductGrid>
          </div>
          <footer className={styles['search-page__body-footer']}>
            {Number(offset) > 0 && (
              <Link
                href="#"
                onClick={handleBack}
                className={styles['search-page__body-load-more']}
              >
                Back
              </Link>
            )}
            {hasMore && (
              <Link
                href="#"
                onClick={handleLoadMore}
                className={styles['search-page__body-load-more']}
              >
                Load More
              </Link>
            )}
          </footer>
        </article>
      </section>
    </div>
  )
}
