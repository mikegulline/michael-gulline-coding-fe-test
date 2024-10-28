'use client'
import { useState, useCallback } from 'react'

const productsPerPage = 6

export default function useFileteredProducts(
  products: Array<Product>,
  merchants: Array<Merchant>
) {
  const [sort, setSort] = useState(false)
  const [pages, setPages] = useState(() => {
    const mapedProducts = productsMap(products, merchants)
    return toPages(mapedProducts, productsPerPage)
  })

  const handleLoadMore = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()
      setPages((pages) => {
        const updatedPages = [...pages]
        if (updatedPages.length === 0) return [[]]
        const firstPage = updatedPages.shift()
        if (!firstPage) return updatedPages
        if (updatedPages[0]) {
          updatedPages[0] = [...firstPage, ...updatedPages[0]]
        } else {
          updatedPages.push(firstPage)
        }

        return updatedPages
      })
      const target = e.currentTarget

      const rect = target.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop

      setTimeout(() => {
        window.scrollTo({
          top: rect.top + scrollTop - 40,
          behavior: 'smooth',
        })
      }, 100)
    },
    [pages]
  )

  const toggleSort: any = useCallback(() => {
    const newSort = !sort
    const mapedProducts = productsMap(products, merchants)
    if (newSort) mapedProducts.reverse()
    const newPages = toPages(mapedProducts, productsPerPage)
    setPages(newPages)
    setSort(newSort)
  }, [sort, products, merchants])

  return { toggleSort, pages, handleLoadMore }
}

const toPages = <T>(items: T[], itemsPerPage: number): T[][] =>
  items.reduce((acc: T[][], cur: T) => {
    if (acc.length === 0 || acc[acc.length - 1].length === itemsPerPage) {
      acc.push([cur])
    } else {
      acc[acc.length - 1].push(cur)
    }
    return acc
  }, [] as T[][])

const productsMap = (products: Array<Product>, merchants: Array<Merchant>) =>
  products?.map((product) => {
    return {
      commissionRate: product.commissionRate,
      image: product.locales[0].variants[0].images[0].url,
      badges: product.badges,
      brand: product.brand.name,
      brandImage:
        merchants?.find(
          (merchant) => merchant.merchantId === product.merchantId
        )?.images[0]?.url || '',
      title: product.locales[0].variants[0].title,
      price: product.locales[0].variants[0].price,
      productId: product.productId,
      options: product.locales[0].variants[0].options,
    }
  }) || []
