import { Meta, StoryObj } from '@storybook/react'
import { restaurants } from 'stub/restaurants'
import { delay, http, HttpResponse } from 'msw'
import { BASE_URL } from 'api'

import { RestaurantsSection } from './RestaurantsSection'

const meta: Meta<typeof RestaurantsSection> = {
  title: 'Pages/HomePage/Components/RestaurantsSection',
  component: RestaurantsSection,
}

export default meta
type Story = StoryObj<typeof RestaurantsSection>

export const Default: Story = {
  args: {
    title: 'Our favorite picks',
  },
  parameters: {
    msw: {
      handlers: [
        http.get(BASE_URL, async () => {
          return HttpResponse.json(restaurants)
        }),
      ],
    },
  },
}

export const Loading: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    msw: {
      handlers: [
        http.get(BASE_URL, async () => {
          await delay('infinite')
        }),
      ],
    },
  },
}
