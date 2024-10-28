const apiKey = process.env.API_KEY
const apiUrl = 'https://search.my.videoshops.com/test/search'

export default async function fetchAPI({
  searchParams,
}: SearchPageProps): Promise<ApiResponse> {
  if (!apiKey) {
    throw new Error('API key is missing')
  }
  if (searchParams?.limit) searchParams.limit = Number(searchParams.limit)
  if (searchParams?.offset) searchParams.offset = Number(searchParams.offset)

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${apiKey}`,
    },
    body: JSON.stringify(searchParams),
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}
