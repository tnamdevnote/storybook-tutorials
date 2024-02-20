import { Meta, StoryObj } from '@storybook/react'
import { restaurants } from 'stub/restaurants'
import { http, HttpResponse } from 'msw'
import { BASE_URL } from 'api'

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
    msw: {
      handlers: [
        http.get(BASE_URL, () => {
          return HttpResponse.json(restaurants)
        }),
      ],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1126-3893&mode=design&t=AzNw8j8pcggpr2zA-4',
    },
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
}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}
