import type { Metadata } from 'next'
import BreadCrumbs from '@/components/bread-crumbs/bread-crumbs'
import SearchSortProducts from './components/search-sort-porducts'
import SearchResultsProducts from './components/search-results-products'
import fetchAPI from './utils/fetch-api'
import productsMap from './utils/products-map'
import styles from './page.module.scss'

export async function generateMetadata({
  searchParams,
}: SearchPageProps): Promise<Metadata> {
  let results: ApiResponse

  try {
    results = await fetchAPI({ searchParams })
  } catch (error: any) {
    return {
      title: `Error fetching search results`,
    }
  }
  return {
    title: `${results.meta.totalHits} Search results for: ${searchParams.query}`,
  }
}

const breadCrumbLinks = [
  { url: '/', title: 'Home' },
  { url: '/', title: 'Skin Care' },
]

export default async function SearchPage({ searchParams }: SearchPageProps) {
  let results: ApiResponse

  try {
    results = await fetchAPI({ searchParams })
  } catch (error: any) {
    return <p>Error fetching data: {error.message}</p>
  }

  const productsMapped = productsMap(results.products, results.merchants)

  return (
    <main className={styles['search']} key={JSON.stringify(searchParams)}>
      <BreadCrumbs links={breadCrumbLinks} />
      <header className={styles['search__header']}>
        <h1 className="font-pp-acma">&ldquo;{searchParams?.query}&rdquo;</h1>
        <SearchSortProducts searchParams={searchParams} />
      </header>
      <div className={styles['search__count']}>
        {results.meta.totalHits} Results
      </div>
      <div className={styles['search__body']}>
        <aside className={styles['search__body__aside']}>
          The sort works but I need more time for the filters! Love to chat
          about all the things I didn't get to… Like the Sellers, Brands,
          Products on the home page, Global store for favorites and the like 😎
        </aside>
        <section className={styles['search__body__section']}>
          <SearchResultsProducts
            searchParams={searchParams}
            products={productsMapped}
            meta={results.meta}
          />
        </section>
      </div>
    </main>
  )
}
