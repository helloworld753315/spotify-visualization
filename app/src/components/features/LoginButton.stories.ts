import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from '@storybook/test'

import LoginButton from './LoginButton'

const meta = {
  title: 'Features/LoginButton',
  component: LoginButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
