// Define the structure of the API response based on your API specifications
type VideoApiResponse = {
  offset: number
  limit: number
  totalHits: number
  queryTime: number
  hits: Array<{ productId: string; highlight: string }>
  facets: {
    brands: Array<{ name: string; count: number }>
    tags: Array<{ name: string; count: number }>
    categories: Array<{ name: string; count: number }>
  }
  priceRange: {
    min: number
    max: number
  }
  products: Array<{ productId: string; name: string; price: number }>
  merchants: Array<{ merchantId: string; name: string }>
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

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  )
}
