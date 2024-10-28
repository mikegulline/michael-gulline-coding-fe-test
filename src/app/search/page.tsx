import BreadCrumbs from '@/components/bread-crumbs/bread-crumbs'
import SearchFilters from './search-filters'
import fetchAPI from './fetch-api'
import styles from './page.module.scss'

const links = [
  { url: '/', title: 'Home' },
  { url: '/', title: 'Skin Care' },
]

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.query
  let results: ApiResponse

  try {
    results = await fetchAPI({ searchParams })
  } catch (error: any) {
    return <p>Error fetching data: {error.message}</p>
  }
  const { meta, hits, facets, priceRange, products, merchants, users } = results

  return (
    <main className={styles['search-page']} key={JSON.stringify(searchParams)}>
      <BreadCrumbs links={links} />

      {/* <pre>
        <code>{JSON.stringify(results, null, 2)}</code>
      </pre> */}

      <SearchFilters
        products={products}
        meta={meta}
        merchants={merchants}
        searchParams={searchParams}
        query={query}
      />
    </main>
  )
}
