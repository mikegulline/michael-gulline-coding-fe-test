import type { Metadata } from 'next'
import BreadCrumbs from '@/components/bread-crumbs/bread-crumbs'
import SearchResultsHeader from '@/components/search-results-header/search-results-header'
import SearchResults from './assets/search-results'
import fetchAPI from './assets/fetch-api'
import productsMap from './assets/products-map'
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
  const { meta, products, merchants } = results

  const productsMapped = productsMap(products, merchants)

  return (
    <main className={styles['search-page']} key={JSON.stringify(searchParams)}>
      <BreadCrumbs links={breadCrumbLinks} />
      <SearchResultsHeader searchParams={searchParams} />
      <div className={styles['search-page__results-count']}>
        {meta.totalHits} Results
      </div>
      <SearchResults
        searchParams={searchParams}
        products={productsMapped}
        meta={meta}
      />
    </main>
  )
}
