import { Meta, StoryObj } from '@storybook/react'

import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  args: {
    text: 'Comfort food',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1906-3469&mode=design&t=ZD7lf5d2CcPRnPPT-4',
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {}
export const DarkTheme: Story = {
  parameters: {
    theme: 'dark',
  },
}
