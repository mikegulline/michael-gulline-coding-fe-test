const paramsToQueryString = <T extends Record<string, unknown>>(
  params: T
): string => {
  const cleanedParams = Object.fromEntries(
    Object.entries(params)
      .filter(([_, value]) => value !== undefined && value !== null)
      .map(([key, value]) => [key, String(value)])
  )

  return new URLSearchParams(cleanedParams).toString()
}

export default paramsToQueryString
