import { Meta, StoryObj } from '@storybook/react'
import { HttpResponse, http } from 'msw'
import { BASE_URL } from 'api'
import { restaurants } from 'stub/restaurants'

import { HomePage } from './HomePage'

const meta: Meta<typeof HomePage> = {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=135-258&mode=design&t=SbVZiTzcqGjjVsMy-4',
    },
    msw: {
      handlers: [
        http.get(BASE_URL, () => {
          HttpResponse.json(restaurants)
        }),
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof HomePage>

export const Default: Story = {}
