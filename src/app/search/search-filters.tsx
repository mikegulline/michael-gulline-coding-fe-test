'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ProductCard from '@/components/product-card/product-card'
import ProductGrid from '@/components/product-grid/product-grid'
import SearchBodyHeader from '@/components/search-body-header/search-body-header'
import useFileteredProducts from './use-filtered-products'
import SearchResultsHeader from '@/components/search-results-header/search-results-header'
import styles from './page.module.scss'

export default function SearchFilters({
  products,
  merchants,
  meta,
  searchParams,
}: SearchFilters) {
  const { pages, handleLoadMore, toggleSort } = useFileteredProducts(
    products,
    merchants
  )
  const router = useRouter()
  const { hasMore, offset, limit, totalHits } = meta

  const handleLoadNext = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()
    const newParams = { ...searchParams }
    newParams['offset'] = Number(offset) + 1
    const cleanedParams = Object.fromEntries(
      Object.entries(newParams)
        .filter(([_, value]) => value !== undefined && value !== null)
        .map(([key, value]) => [key, String(value)])
    )
    const queryString = new URLSearchParams(cleanedParams).toString()
    router.push(`/search?${queryString}`)
  }

  const handleLoadPrev = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()
    const newParams = { ...searchParams }
    newParams['offset'] = Number(offset) - 1
    const cleanedParams = Object.fromEntries(
      Object.entries(newParams)
        .filter(([_, value]) => value !== undefined && value !== null)
        .map(([key, value]) => [key, String(value)])
    )
    const queryString = new URLSearchParams(cleanedParams).toString()
    router.push(`/search?${queryString}`)
  }

  return (
    <>
      <SearchResultsHeader searchParams={searchParams} />
      <div className={styles['search-page__results-count']}>
        {totalHits} Results
      </div>
      <div className={styles['search-page__body']}>
        <aside className={styles['search-page__body-left-col']}></aside>
        <section className={styles['search-page__body-right-col']}>
          <article
            className={styles['search-page__body-right-col__more-wrapper']}
          >
            <div
              className={styles['search-page__body-right-col__results-wrapper']}
            >
              <SearchBodyHeader
                title="Products"
                showing={pages[0]?.length || 0}
                count={products.length}
              />
              <ProductGrid>
                {pages[0]?.map((product: FilteredProduct) => (
                  <ProductCard key={product.productId} {...product} />
                ))}
              </ProductGrid>
            </div>
            <footer className={styles['search-page__body-footer']}>
              {Number(offset) > 0 && (
                <Link
                  href="#"
                  onClick={handleLoadPrev}
                  className={styles['search-page__body-load-more']}
                >
                  Load Prev 50
                </Link>
              )}
              {pages.length > 1 && (
                <Link
                  href="#"
                  onClick={handleLoadMore}
                  className={styles['search-page__body-load-more']}
                >
                  Load More
                </Link>
              )}
              {pages.length === 1 && hasMore && (
                <Link
                  href="#"
                  onClick={handleLoadNext}
                  className={styles['search-page__body-load-more']}
                >
                  Load Next 50
                </Link>
              )}
            </footer>
          </article>
        </section>
      </div>
    </>
  )
}
