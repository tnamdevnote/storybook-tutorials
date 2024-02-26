import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { restaurants } from 'stub/restaurants'
import { within, userEvent } from '@storybook/testing-library'

import { RestaurantCard } from './RestaurantCard'

const meta: Meta<typeof RestaurantCard> = {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  args: {
    ...restaurants[0],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1126-3893&mode=design&t=AzNw8j8pcggpr2zA-4',
    },
  },
}

export default meta
type Story = StoryObj<typeof RestaurantCard>

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1126-3893&mode=design&t=AzNw8j8pcggpr2zA-4',
    },
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('restaurant-card'))
    await expect(args.onClick).toHaveBeenCalled()
  },
}

export const New: Story = {
  args: {
    isNew: true,
  },
}

export const Closed: Story = {
  args: {
    isClosed: true,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('restaurant-card'))
    await expect(args.onClick).not.toHaveBeenCalled()
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}
