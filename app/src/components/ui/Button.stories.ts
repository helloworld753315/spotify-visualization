import type { Meta, StoryObj } from '@storybook/nextjs-vite';
// import { fn } from '@storybook/test';

import Button from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    title: { control: 'text' },
  },
  args: { onClick: () => {} },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'ボタン',
  },
};

export const WithTitle: Story = {
  args: {
    children: 'タイトル付きボタン',
    title: 'ボタンのタイトル',
  },
};

export const Colored: Story = {
  args: {
    children: 'カラーボタン',
    color: '#1db954',
  },
};

export const Login: Story = {
  args: {
    children: 'Spotifyでログイン',
    color: '#1db954',
    title: 'Spotifyでログイン',
  },
};