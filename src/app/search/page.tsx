import Link from 'next/link'
import ProductCard from '@/components/product-card/product-card'
import ProductGrid from '@/components/product-grid/product-grid'
import SearchHeader from '@/components/search-header/search-header'
import styles from './page.module.scss'

type VideoApiResponse = {
  offset: number
  limit: number
  totalHits: number
  queryTime: number
  users: {}
  hits: Array<{
    id: string
    productId: string
    highlight: { title?: string; description?: string }
  }>
  facets: {
    brands: Array<{ name: string; count: number }>
    tags: Array<{ name: string; count: number }>
    categories: Array<{ name: string; count: number }>
  }
  priceRange: {
    min: number
    max: number
  }
  products: Array<{
    productId: string
    merchantId: string
    brand: {
      name: string
    }
    badges: Array<string>
    commissionRate: number
    locales: Array<{
      country: string
      language: string
      currency: string
      variants: Array<{
        title: string
        price: number
        images: Array<{
          url: string
          index: number
        }>
        options: Array<{
          key: string
          keyName: string
          value: string
        }>
      }>
    }>
  }>
  meta: {
    totalHits: number
  }
  merchants: Array<{
    merchantId: string
    name: string
    images: Array<{ url: string }>
  }>
}

type FetchVideosParams = {
  query: string
}

const apiKey = process.env.API_KEY
const apiUrl = 'https://search.my.videoshops.com/test/search'

async function fetchVideos({
  query,
}: FetchVideosParams): Promise<VideoApiResponse> {
  if (!apiKey) {
    throw new Error('API key is missing')
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${apiKey}`,
    },
    body: JSON.stringify({ query }),
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

type SearchParams = {
  query?: string
}

interface SearchPageProps {
  searchParams: SearchParams
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.query || 'bobbi brown cream face' // Default query or from URL
  let results: VideoApiResponse

  try {
    results = await fetchVideos({ query })
  } catch (error: any) {
    return <p>Error fetching data: {error.message}</p>
  }
  const { meta, hits, facets, priceRange, products, merchants, users } = results
  console.log(products.length)
  return (
    <div className={styles['search-page']}>
      <h1>Search Results for "{query}"</h1>
      <div className={styles['search-page__body']}>
        <div className={styles['search-page__body-left-col']}></div>
        <div className={styles['search-page__body-right-col']}>
          <div className={styles['search-page__body-right-col__more-wrapper']}>
            <div
              className={styles['search-page__body-right-col__results-wrapper']}
            >
              <SearchHeader title="Products" count={meta.totalHits} />
              <ProductGrid>
                {products?.map((product) => {
                  const commissionRate = product.commissionRate
                  const image = product.locales[0].variants[0].images[0].url
                  const badges = product.badges
                  const brand = product.brand.name
                  const brandImage =
                    merchants?.find(
                      (merchant) => merchant.merchantId === product.merchantId
                    )?.images[0]?.url || ''
                  const title = product.locales[0].variants[0].title
                  const price = product.locales[0].variants[0].price
                  const productId = product.productId
                  const options = product.locales[0].variants[0].options
                  return (
                    <ProductCard
                      key={product.productId}
                      commissionRate={commissionRate}
                      image={image}
                      badges={badges}
                      brand={brand}
                      brandImage={brandImage}
                      title={title}
                      price={price}
                      productId={productId}
                      options={options}
                    />
                  )
                })}
              </ProductGrid>
            </div>
            <Link href="#" className={styles['search-page__body-load-more']}>
              Load More
            </Link>
          </div>
        </div>
      </div>

      {/* <pre>{JSON.stringify(results, null, 2)}</pre> */}
    </div>
  )
}
