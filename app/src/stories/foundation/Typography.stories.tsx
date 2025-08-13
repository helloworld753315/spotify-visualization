import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const Typography = () => {
  const typeScale = [
    {
      category: 'Display',
      description: 'アプリタイトル・大見出し',
      styles: [
        {
          name: 'Display Large',
          size: '48px',
          weight: '700',
          lineHeight: '1.2',
          usage: 'アプリタイトル（Desktop）',
        },
        {
          name: 'Display Medium',
          size: '36px',
          weight: '700',
          lineHeight: '1.2',
          usage: 'セクションタイトル',
        },
        {
          name: 'Display Small',
          size: '28px',
          weight: '700',
          lineHeight: '1.3',
          usage: 'カードタイトル・モバイル',
        },
      ],
    },
    {
      category: 'Heading',
      description: '見出し・タイトル',
      styles: [
        {
          name: 'Heading Large',
          size: '24px',
          weight: '700',
          lineHeight: '1.3',
          usage: 'セクション見出し',
        },
        {
          name: 'Heading Medium',
          size: '20px',
          weight: '600',
          lineHeight: '1.4',
          usage: 'サブセクション',
        },
        {
          name: 'Heading Small',
          size: '18px',
          weight: '600',
          lineHeight: '1.4',
          usage: 'カード内タイトル',
        },
      ],
    },
    {
      category: 'Body',
      description: '本文・一般テキスト',
      styles: [
        {
          name: 'Body Large',
          size: '16px',
          weight: '400',
          lineHeight: '1.5',
          usage: '楽曲名・主要テキスト',
        },
        {
          name: 'Body Medium',
          size: '14px',
          weight: '400',
          lineHeight: '1.5',
          usage: '一般テキスト・説明文',
        },
        {
          name: 'Body Small',
          size: '13px',
          weight: '400',
          lineHeight: '1.4',
          usage: 'アーティスト名・補助情報',
        },
      ],
    },
    {
      category: 'Label',
      description: 'ラベル・キャプション',
      styles: [
        {
          name: 'Label Large',
          size: '12px',
          weight: '600',
          lineHeight: '1.4',
          usage: 'ボタンテキスト・ラベル',
        },
        {
          name: 'Label Medium',
          size: '11px',
          weight: '500',
          lineHeight: '1.4',
          usage: 'フィルターボタン・バッジ',
        },
        {
          name: 'Label Small',
          size: '10px',
          weight: '600',
          lineHeight: '1.3',
          usage: 'BPM表示・小さなラベル',
        },
      ],
    },
  ]

  const sampleText = {
    display: 'Spotify Audio Insights',
    heading: 'My Chill Playlist',
    body: 'このプレイリストの楽曲を音響特性で分析し、理想的な流れに並び替えましょう。',
    label: 'エナジェティック',
  }

  return (
    <div
      style={{
        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
        color: '#333333',
      }}
    >
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '16px' }}>
          Typography System
        </h1>
        <p style={{ fontSize: '18px', color: '#666666', marginBottom: '24px' }}>
          Spotify Audio Insights のタイポグラフィ階層とスタイル定義
        </p>

        {/* フォントファミリー情報 */}
        <div
          style={{
            background: '#f8f9fa',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '32px',
          }}
        >
          <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px' }}>Font Family</h3>
          <div style={{ fontSize: '14px', lineHeight: '1.6' }}>
            <p>
              <strong>Primary:</strong> SF Pro Display (macOS/iOS)
            </p>
            <p>
              <strong>Fallback:</strong> -apple-system, BlinkMacSystemFont, sans-serif
            </p>
            <p>
              <strong>Monospace:</strong> Monaco, Consolas, 'Courier New', monospace (数値表示用)
            </p>
          </div>
        </div>
      </div>

      {typeScale.map((category, categoryIndex) => (
        <div key={categoryIndex} style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '8px',
              color: '#1DB954',
            }}
          >
            {category.category}
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: '#666666',
              marginBottom: '24px',
            }}
          >
            {category.description}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {category.styles.map((style, styleIndex) => (
              <div
                key={styleIndex}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: '32px',
                  padding: '24px',
                  background: '#ffffff',
                  border: '1px solid #e8e8e8',
                  borderRadius: '12px',
                  alignItems: 'center',
                }}
              >
                {/* スタイル情報 */}
                <div>
                  <h4
                    style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      marginBottom: '8px',
                    }}
                  >
                    {style.name}
                  </h4>
                  <div style={{ fontSize: '12px', color: '#666666', lineHeight: '1.4' }}>
                    <p>
                      <strong>Size:</strong> {style.size}
                    </p>
                    <p>
                      <strong>Weight:</strong> {style.weight}
                    </p>
                    <p>
                      <strong>Line Height:</strong> {style.lineHeight}
                    </p>
                    <p style={{ marginTop: '8px' }}>
                      <strong>Usage:</strong> {style.usage}
                    </p>
                  </div>
                </div>

                {/* サンプルテキスト */}
                <div>
                  <div
                    style={{
                      fontSize: style.size,
                      fontWeight: style.weight,
                      lineHeight: style.lineHeight,
                      color: '#333333',
                    }}
                  >
                    {category.category === 'Display' && sampleText.display}
                    {category.category === 'Heading' && sampleText.heading}
                    {category.category === 'Body' && sampleText.body}
                    {category.category === 'Label' && sampleText.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* レスポンシブ対応 */}
      <div
        style={{
          marginTop: '48px',
          padding: '24px',
          background: '#f8f9fa',
          borderRadius: '12px',
        }}
      >
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>
          レスポンシブ対応
        </h3>
        <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#666666' }}>
          <p style={{ marginBottom: '12px' }}>
            <strong>Desktop (&gt;1024px):</strong> 上記サイズをそのまま使用
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong>Tablet (768px-1024px):</strong> Display を 1段階縮小
          </p>
          <p style={{ marginBottom: '12px' }}>
            <strong>Mobile (&lt;768px):</strong> Display を 2段階縮小、行間を調整
          </p>
          <p>
            <strong>実装:</strong> CSS clamp() 関数やメディアクエリで段階的にスケール
          </p>
        </div>
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => <Typography />,
}
