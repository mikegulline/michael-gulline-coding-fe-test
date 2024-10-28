export default function productsMap(
  products: Array<Product>,
  merchants: Array<Merchant>
) {
  return (
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
  )
}
