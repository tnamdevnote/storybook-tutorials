import { Meta, StoryObj } from '@storybook/react'

import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  args: {
    text: 'Comfort food',
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}
