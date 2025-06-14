import type { Meta, StoryObj } from '@storybook/nextjs-vite';
// import { fn } from '@storybook/test';
import { useState } from 'react';

import RadioButtonGroup from './RadioButton';

const meta = {
  title: 'UI/RadioButtonGroup',
  component: RadioButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'object' },
    selectedOption: { control: 'text' },
  },
  args: { onChange: () => {} },
} satisfies Meta<typeof RadioButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['選択肢1', '選択肢2', '選択肢3'],
    selectedOption: '選択肢1',
  },
};

export const SpotifyVisualization: Story = {
  args: {
    options: ['BPM', '音量', 'グルーヴ感', 'アコースティック感'],
    selectedOption: 'BPM',
  },
};

export const TwoOptions: Story = {
  args: {
    options: ['はい', 'いいえ'],
    selectedOption: 'はい',
  },
};

export const ManyOptions: Story = {
  args: {
    options: ['オプション1', 'オプション2', 'オプション3', 'オプション4', 'オプション5'],
    selectedOption: 'オプション3',
  },
};