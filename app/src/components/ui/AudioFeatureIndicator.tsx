import React from 'react'
import styles from './AudioFeatureIndicator.module.scss'

export type AudioFeatureType = 'energy' | 'danceability' | 'acousticness' | 'valence'
export type DisplayMode = 'icon' | 'bar' | 'percentage'
export type Size = 'small' | 'medium' | 'large'

export interface AudioFeatureIndicatorProps {
  type: AudioFeatureType
  value: number // 0.0 - 1.0
  displayMode?: DisplayMode
  size?: Size
  showLabel?: boolean
  className?: string
}

const THRESHOLDS = {
  energy: { low: 0.33, high: 0.66 },
  danceability: { low: 0.35, high: 0.65 },
  acousticness: { low: 0.3, high: 0.7 },
  valence: { low: 0.4, high: 0.6 },
}

const getFeatureLevel = (type: AudioFeatureType, value: number): 'low' | 'medium' | 'high' => {
  const threshold = THRESHOLDS[type]
  if (value <= threshold.low) return 'low'
  if (value <= threshold.high) return 'medium'
  return 'high'
}

const getFeatureConfig = (type: AudioFeatureType, level: 'low' | 'medium' | 'high') => {
  const configs = {
    energy: {
      low: { icon: '⚡', count: 1, color: '#4a90e2', label: 'ローエナジー' },
      medium: { icon: '⚡', count: 2, color: '#1DB954', label: 'ミディアム' },
      high: { icon: '⚡', count: 3, color: '#ff6b35', label: 'ハイエナジー' },
    },
    danceability: {
      low: { icon: '🕺', count: 1, color: '#999999', label: '踊りにくい' },
      medium: { icon: '🕺', count: 1, color: '#e056fd', label: 'ダンサブル' },
      high: { icon: '🕺', count: 1, color: '#e056fd', label: '超ダンサブル' },
    },
    acousticness: {
      low: { icon: '🎸', count: 1, color: '#8b5a2b', label: 'エレクトロニック' },
      medium: { icon: '🎸', count: 1, color: '#8b5a2b', label: 'ミックス' },
      high: { icon: '🎸', count: 1, color: '#8b5a2b', label: 'アコースティック' },
    },
    valence: {
      low: { icon: '😔', count: 1, color: '#888888', label: 'ネガティブ' },
      medium: { icon: '😐', count: 1, color: '#ffa500', label: 'ニュートラル' },
      high: { icon: '😊', count: 1, color: '#ffbe0b', label: 'ポジティブ' },
    },
  }

  return configs[type][level]
}

export default function AudioFeatureIndicator({
  type,
  value,
  displayMode = 'icon',
  size = 'medium',
  showLabel = false,
  className = '',
}: AudioFeatureIndicatorProps) {
  const level = getFeatureLevel(type, value)
  const config = getFeatureConfig(type, level)
  const percentage = Math.round(value * 100)

  if (displayMode === 'percentage') {
    return (
      <div className={`${styles.indicator} ${styles[size]} ${styles.percentage} ${className}`}>
        <span className={styles.value} style={{ color: config.color }}>
          {percentage}%
        </span>
        {showLabel && <span className={styles.label}>{type}</span>}
      </div>
    )
  }

  if (displayMode === 'bar') {
    return (
      <div className={`${styles.indicator} ${styles[size]} ${styles.bar} ${className}`}>
        {showLabel && <span className={styles.label}>{type}</span>}
        <div className={styles.barContainer}>
          <div
            className={styles.barFill}
            style={{
              width: `${percentage}%`,
              backgroundColor: config.color,
            }}
          />
        </div>
        <span className={styles.value}>{percentage}%</span>
      </div>
    )
  }

  // Icon mode (default)
  return (
    <div className={`${styles.indicator} ${styles[size]} ${styles.icon} ${className}`}>
      <div className={styles.iconContainer}>
        {type === 'energy' ? (
          <div className={`${styles.energyIcons} ${styles[level]}`} style={{ color: config.color }}>
            {Array.from({ length: config.count }, (_, i) => (
              <span key={i} className={styles.energyBolt}>
                {config.icon}
              </span>
            ))}
          </div>
        ) : (
          <span
            className={`${styles.featureIcon} ${styles[`${type}-${level}`]}`}
            style={{ color: config.color }}
          >
            {config.icon}
          </span>
        )}
      </div>
      {showLabel && <span className={styles.label}>{config.label}</span>}
    </div>
  )
}
