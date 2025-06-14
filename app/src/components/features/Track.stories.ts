import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Track from './Track';

const meta = {
  title: 'Features/Track',
  component: Track,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    trackName: { control: 'text' },
    artist: { control: 'text' },
    url: { control: 'text' },
    image: { control: 'text' },
    rate: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
} satisfies Meta<typeof Track>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trackName: 'Example Song',
    artist: 'Example Artist',
    url: 'https://open.spotify.com/track/example',
    image: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
    rate: 60,
  },
};

export const HighRate: Story = {
  args: {
    trackName: '人気の楽曲',
    artist: '有名アーティスト',
    url: 'https://open.spotify.com/track/popular',
    image: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
    rate: 95,
  },
};

export const LowRate: Story = {
  args: {
    trackName: 'あまり人気でない楽曲',
    artist: 'インディーズアーティスト',
    url: 'https://open.spotify.com/track/unpopular',
    image: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
    rate: 15,
  },
};

export const LongNames: Story = {
  args: {
    trackName: 'とても長い楽曲名のテストケースですがどのように表示されるでしょうか',
    artist: 'とても長いアーティスト名のテストケース',
    url: 'https://open.spotify.com/track/long',
    image: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
    rate: 75,
  },
};