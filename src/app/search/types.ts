type Option = {
  key: string
  keyName: string
  value: string
}

type Product = {
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
      options: Array<Option>
    }>
  }>
}

type Merchant = {
  merchantId: string
  name: string
  images: Array<{ url: string }>
}

type SearchFilters = {
  searchParams: SearchParams
  query: string
  products: Array<Product>
  meta: Meta
  merchants: Array<Merchant>
}

type FilteredProduct = {
  commissionRate: number
  image: string
  badges: Array<string>
  brand: string
  brandImage: string
  title: string
  price: number
  productId: string
  options: Array<Option>
}

type FilteredProducts = Array<FilteredProduct>

type Meta = {
  totalHits: number
  hasMore: boolean
  offset: number
  limit: number
}

type ApiResponse = {
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
  products: Array<Product>
  meta: Meta
  merchants: Array<Merchant>
}

type sortBy = 'lowPrice' | 'highPrice' | 'newest' | 'relevance'

type SearchParams = {
  query: string
  sortBy?: sortBy
  offset?: number
  limit?: number
}

interface SearchPageProps {
  searchParams: SearchParams
}
