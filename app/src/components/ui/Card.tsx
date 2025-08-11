import React, { ReactNode } from 'react'
import styles from '@styles/card.module.scss'

export interface CardProps {
  children: ReactNode
  className?: string
  width?: string
  height?: string
  style?: React.CSSProperties
}

export default function Card({ children, className = '', width, height, style = {} }: CardProps) {
  const cardStyle = {
    ...style,
    ...(width && { width }),
    ...(height && { height }),
  }

  return (
    <div className={`${styles.card} ${className}`} style={cardStyle}>
      {children}
    </div>
  )
}

// 画像付きカード用のサブコンポーネント
export interface ImageCardProps extends Omit<CardProps, 'children'> {
  image: string
  imageAlt: string
  title?: string
  subtitle?: string
  content?: ReactNode
}

export function ImageCard({
  image,
  imageAlt,
  title,
  subtitle,
  content,
  className = '',
  ...cardProps
}: ImageCardProps) {
  return (
    <Card className={className} {...cardProps}>
      <img src={image} alt={imageAlt} />
      {title && <p className={styles.title}>{title}</p>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {content}
    </Card>
  )
}
