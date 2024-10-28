'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  SameDayPayIcon,
  FaveHeartIcon,
  FaveHeartIconHover,
} from '@/components/icons'
import styles from './procuct-card.module.scss'

export type ProductCard = {
  commissionRate: number
  image: string
  brand: string
  brandImage: string
  title: string
  price: number
  productId: string
  badges: Array<string>
  options: Array<{
    key: string
    keyName: string
    value: string
  }>
}
export default function ProductCard({
  commissionRate,
  image,
  brand,
  brandImage,
  title,
  price,
  productId,
  badges,
  options,
}: ProductCard) {
  return (
    <li>
      <div className={styles['product-card']}>
        <div className={styles['product-card__image-wrapper']}>
          <Image src={image} alt={title} width={162} height={160} />
          <div className={styles['product-card__image-wrapper__fave-heart']}>
            <HeartButton />
          </div>
          {commissionRate && (
            <div
              className={styles['product-card__image-wrapper__commission-rate']}
            >
              {commissionRate}% Commission
            </div>
          )}
          {badges?.includes('same-day-pay') && (
            <div
              className={styles['product-card__image-wrapper__same-day-pay']}
            >
              <SameDayPayIcon />
            </div>
          )}
        </div>
        <div className={styles['product-card__infos']}>
          <div className={styles['product-card__brand']}>
            <Image src={brandImage} alt={brand} width={32} height={32} />
            <p>{brand}</p>
          </div>
          <div className={styles['product-card__name']}>{title}</div>
          <div className={styles['product-card__options']}>
            {options.length} Options
          </div>
          <div className={styles['product-card__price']}>
            ${price.toFixed(2)}
          </div>
        </div>

        <div className={styles['product-card__buttons']}>
          <Link href="#" className={styles['product-card__buttons-shelf']}>
            Add to Shelf
          </Link>
          <Link href="#" className={styles['product-card__buttons-bag']}>
            Add to Bag
          </Link>
        </div>
      </div>
    </li>
  )
}

const HeartButton = () => {
  const [hover, setHover] = useState(false)
  const [selected, setSelected] = useState(false)

  return (
    <Link
      href="#"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setSelected(!selected)}
    >
      {hover || selected ? <FaveHeartIconHover /> : <FaveHeartIcon />}
    </Link>
  )
}
