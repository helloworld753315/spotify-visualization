import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Foundation/Spacing',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const Spacing = () => {
  const spacingScale = [
    { name: 'xs', value: '4px', usage: 'アイコン間隔・細かな調整' },
    { name: 'sm', value: '8px', usage: 'ラベルとアイコンの間・小さなパディング' },
    { name: 'md', value: '12px', usage: 'カード内要素間・リスト項目間' },
    { name: 'lg', value: '16px', usage: 'カードパディング・ボタン内余白' },
    { name: 'xl', value: '20px', usage: 'セクション間・大きなパディング' },
    { name: '2xl', value: '24px', usage: 'カード間隔・コンテナ内余白' },
    { name: '3xl', value: '32px', usage: 'セクション間隔・大きなマージン' },
    { name: '4xl', value: '40px', usage: 'ページレイアウト・メインコンテンツ間隔' },
    { name: '5xl', value: '48px', usage: 'ページセクション間・大きな区切り' },
    { name: '6xl', value: '64px', usage: 'ページ全体レイアウト・大きな余白' },
  ]

  const layoutExamples = [
    {
      name: 'Track Card',
      description: 'プレイリスト内の楽曲カード',
      spacing: {
        padding: '16px (lg)',
        gap: '12px (md)',
        marginBottom: '12px (md)',
      },
    },
    {
      name: 'Playlist Container',
      description: 'プレイリスト全体のコンテナ',
      spacing: {
        padding: '24px (2xl)',
        marginBottom: '20px (xl)',
        borderRadius: '16px',
      },
    },
    {
      name: 'Audio Features',
      description: '音響特性表示エリア',
      spacing: {
        gap: '20px (xl)',
        padding: '12px (md)',
        itemSpacing: '8px (sm)',
      },
    },
  ]

  return (
    <div
      style={{
        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
        color: '#333333',
      }}
    >
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '16px' }}>
          Spacing System
        </h1>
        <p style={{ fontSize: '18px', color: '#666666', marginBottom: '24px' }}>
          一貫性のあるレイアウトのためのスペーシングスケール
        </p>
      </div>

      {/* スペーシングスケール表示 */}
      <div style={{ marginBottom: '48px' }}>
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '24px',
            color: '#1DB954',
          }}
        >
          Spacing Scale
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {spacingScale.map((space, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 80px 1fr 200px',
                gap: '24px',
                padding: '16px',
                background: '#ffffff',
                border: '1px solid #e8e8e8',
                borderRadius: '8px',
                alignItems: 'center',
              }}
            >
              {/* スペース名 */}
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  fontFamily: 'Monaco, Consolas, monospace',
                }}
              >
                {space.name}
              </div>

              {/* サイズ */}
              <div
                style={{
                  fontSize: '12px',
                  color: '#666666',
                  fontFamily: 'Monaco, Consolas, monospace',
                }}
              >
                {space.value}
              </div>

              {/* 視覚的表現 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: space.value,
                    height: '20px',
                    background: '#1DB954',
                    borderRadius: '2px',
                  }}
                />
                <div style={{ fontSize: '12px', color: '#666666' }}>{space.usage}</div>
              </div>

              {/* 実際のスペーシング例 */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    background: '#4a90e2',
                    borderRadius: '2px',
                  }}
                />
                <div style={{ width: space.value }} />
                <div
                  style={{
                    width: '16px',
                    height: '16px',
                    background: '#4a90e2',
                    borderRadius: '2px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* レイアウト例 */}
      <div style={{ marginBottom: '48px' }}>
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '24px',
            color: '#1DB954',
          }}
        >
          Layout Examples
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {layoutExamples.map((example, index) => (
            <div key={index}>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '12px',
                }}
              >
                {example.name}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: '#666666',
                  marginBottom: '16px',
                }}
              >
                {example.description}
              </p>

              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid #e8e8e8',
                  borderRadius: '12px',
                  padding: '20px',
                }}
              >
                {Object.entries(example.spacing).map(([property, value]) => (
                  <div
                    key={property}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px 0',
                      borderBottom: '1px solid #f0f0f0',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        textTransform: 'capitalize',
                      }}
                    >
                      {property}:
                    </span>
                    <span
                      style={{
                        fontSize: '12px',
                        fontFamily: 'Monaco, Consolas, monospace',
                        color: '#666666',
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 使用ガイドライン */}
      <div
        style={{
          padding: '24px',
          background: '#f8f9fa',
          borderRadius: '12px',
        }}
      >
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          使用ガイドライン
        </h3>
        <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666' }}>
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ fontWeight: '600', color: '#333333', marginBottom: '8px' }}>基本原則</h4>
            <ul style={{ paddingLeft: '20px', margin: '0' }}>
              <li style={{ marginBottom: '4px' }}>4px の倍数を基本とする</li>
              <li style={{ marginBottom: '4px' }}>隣接要素は同じスペーシングレベルを使用</li>
              <li style={{ marginBottom: '4px' }}>視覚的階層に応じてスペースを大きくする</li>
            </ul>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ fontWeight: '600', color: '#333333', marginBottom: '8px' }}>実装方法</h4>
            <ul style={{ paddingLeft: '20px', margin: '0' }}>
              <li style={{ marginBottom: '4px' }}>CSS Variables や SCSS 変数で定義</li>
              <li style={{ marginBottom: '4px' }}>Flexbox gap や Grid gap を優先使用</li>
              <li style={{ marginBottom: '4px' }}>
                margin より padding を優先（collapsed margins 回避）
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: '600', color: '#333333', marginBottom: '8px' }}>
              レスポンシブ対応
            </h4>
            <ul style={{ paddingLeft: '20px', margin: '0' }}>
              <li style={{ marginBottom: '4px' }}>モバイルでは 1段階小さいスペーシングを使用</li>
              <li style={{ marginBottom: '4px' }}>タッチターゲットは最低 44px の間隔を確保</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => <Spacing />,
}
