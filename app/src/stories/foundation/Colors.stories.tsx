import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Foundation/Colors',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const ColorPalette = () => {
  const colorGroups = [
    {
      title: 'Brand Colors',
      description: 'Spotify ブランドカラー',
      colors: [
        { name: 'Primary', value: '#1DB954', description: 'Spotify Green - メインアクション' },
        { name: 'Primary Light', value: '#1ed760', description: 'ホバー・アクティブ状態' },
      ],
    },
    {
      title: 'Neutral Colors',
      description: '基本色・背景色',
      colors: [
        { name: 'Background', value: '#fafafa', description: 'アプリ背景' },
        { name: 'Card Background', value: '#ffffff', description: 'カード・モーダル背景' },
        { name: 'Text Primary', value: '#333333', description: '主要テキスト' },
        { name: 'Text Secondary', value: '#666666', description: '補助テキスト' },
        { name: 'Text Tertiary', value: '#999999', description: 'キャプション・ラベル' },
        { name: 'Border', value: '#e8e8e8', description: 'ボーダー・区切り線' },
      ],
    },
    {
      title: 'Audio Feature Colors',
      description: '音響特性表現用カラー',
      colors: [
        { name: 'Energy High', value: '#ff6b35', description: '高エネルギー楽曲' },
        { name: 'Energy Medium', value: '#1DB954', description: '中エネルギー楽曲' },
        { name: 'Energy Low', value: '#4a90e2', description: '低エネルギー楽曲' },
        { name: 'Danceability', value: '#e056fd', description: 'ダンサビリティ' },
        { name: 'Acousticness', value: '#8b5a2b', description: 'アコースティック感' },
        { name: 'Valence', value: '#ffbe0b', description: '感情価・ポジティブ度' },
      ],
    },
    {
      title: 'Semantic Colors',
      description: '状態・フィードバック用',
      colors: [
        { name: 'Success', value: '#1DB954', description: '成功・完了状態' },
        { name: 'Warning', value: '#ffbe0b', description: '警告・注意' },
        { name: 'Error', value: '#f72585', description: 'エラー・失敗' },
        { name: 'Info', value: '#4a90e2', description: '情報・ヘルプ' },
      ],
    },
  ]

  return (
    <div style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>
      {colorGroups.map((group, groupIndex) => (
        <div key={groupIndex} style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#333333',
              marginBottom: '8px',
            }}
          >
            {group.title}
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: '#666666',
              marginBottom: '24px',
            }}
          >
            {group.description}
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            {group.colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e8e8e8',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  style={{
                    height: '80px',
                    backgroundColor: color.value,
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '12px',
                      background: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontFamily: 'Monaco, Consolas, monospace',
                    }}
                  >
                    {color.value}
                  </div>
                </div>
                <div style={{ padding: '16px' }}>
                  <h4
                    style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#333333',
                      marginBottom: '4px',
                    }}
                  >
                    {color.name}
                  </h4>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#666666',
                      lineHeight: '1.4',
                    }}
                  >
                    {color.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div
        style={{ marginTop: '48px', padding: '24px', background: '#f8f9fa', borderRadius: '12px' }}
      >
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>使用方法</h3>
        <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666' }}>
          <p style={{ marginBottom: '12px' }}>
            <strong>CSS Variables:</strong> これらの色は CSS Variables
            として定義し、テーマ切り替えに対応
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong>SCSS:</strong> _variables.scss ファイルで管理し、コンポーネント間で一貫性を保つ
          </p>
          <p>
            <strong>音響特性色:</strong> データ可視化専用色として、他の UI 要素では使用しない
          </p>
        </div>
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => <ColorPalette />,
}
