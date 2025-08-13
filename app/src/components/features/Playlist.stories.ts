import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import Playlist from './Playlist'

const meta = {
  title: 'Features/Playlist',
  component: Playlist,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    playlistName: { control: 'text' },
    url: { control: 'text' },
    image: { control: 'text' },
  },
} satisfies Meta<typeof Playlist>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    playlistName: 'My Favorite Songs',
    url: 'https://open.spotify.com/playlist/example',
    image: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
  },
}

export const JapanesePlaylist: Story = {
  args: {
    playlistName: 'J-POPヒッツ',
    url: 'https://open.spotify.com/playlist/jpop',
    image: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
  },
}

export const LongName: Story = {
  args: {
    playlistName: 'とても長いプレイリスト名のテストケースです',
    url: 'https://open.spotify.com/playlist/long',
    image: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
  },
}
