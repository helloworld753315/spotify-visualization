import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'
import Card, { ImageCard } from './Card'

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <p>デフォルトカード</p>
    </Card>
  ),
}

export const CustomSize: Story = {
  render: (args) => (
    <Card width="300px" height="200px" {...args}>
      <p>カスタムサイズカード</p>
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <ImageCard
      image="https://via.placeholder.com/150"
      imageAlt="プレースホルダー画像"
      title="画像付きカード"
      subtitle="サブタイトル"
    />
  ),
}

export const TrackCard: Story = {
  render: () => (
    <Card className="track_card">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 1fr',
          height: '100%',
        }}
      >
        <img
          src="https://via.placeholder.com/100"
          alt="トラック画像"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '12px',
            margin: '10px',
          }}
        />
        <div style={{ margin: '10px' }}>
          <p style={{ fontSize: '26px', fontWeight: 'bold', margin: '2px 0' }}>サンプルトラック</p>
          <p style={{ fontSize: '18px', margin: '2px 0' }}>アーティスト名</p>
          <div
            style={{
              width: '300px',
              height: '7px',
              background: '#ccc',
              borderRadius: '10px',
              margin: '10px 0',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: '60%',
                height: '7px',
                background: '#1db954',
                borderRadius: '10px',
                position: 'absolute',
              }}
            ></div>
          </div>
        </div>
      </div>
    </Card>
  ),
}
