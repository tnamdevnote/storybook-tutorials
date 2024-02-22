import { Meta, StoryObj } from '@storybook/react'
import { cartItems as items } from 'stub/cart-items'
import { BASE_URL } from 'api'
import { delay, http, HttpResponse } from 'msw'
import { restaurants } from 'stub/restaurants'

import { RestaurantDetailPage } from './RestaurantDetailPage'

const meta: Meta<typeof RestaurantDetailPage> = {
  title: 'Pages/RestaurantDetailPage',
  component: RestaurantDetailPage,
  parameters: {
    layout: 'fullscreen',
    deeplink: {
      path: '/restaurants/:id',
      route: '/restaurants/1',
    },
    msw: {
      handlers: [
        http.get(BASE_URL, () => {
          HttpResponse.json(restaurants[0])
        }),
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof RestaurantDetailPage>

export const Succes: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=169-510&mode=design&t=SbVZiTzcqGjjVsMy-4',
    },
    msw: {
      handlers: [
        http.get(BASE_URL, () => {
          HttpResponse.json(restaurants[0])
        }),
      ],
    },
  },
  render: () => (
    <>
      <RestaurantDetailPage />
      <div id="modal"></div>
    </>
  ),
}

export const SuccessWithItemsInTheCart: Story = {
  parameters: {
    store: {
      initialState: { cart: { items } },
    },
    msw: {
      handlers: [
        http.get(BASE_URL, () => {
          return HttpResponse.json(restaurants[0])
        }),
      ],
    },
  },
}

export const Loading: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=2152-3158&mode=design&t=SbVZiTzcqGjjVsMy-4',
    },
    msw: {
      handlers: [
        http.get(BASE_URL, async () => {
          await delay('infinite')
        }),
      ],
    },
  },
}

export const NotFound: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=2152-3158&mode=design&t=SbVZiTzcqGjjVsMy-4',
    },
    msw: {
      handlers: [
        // http.get(BASE_URL, () => {
        //   return new HttpResponse.json(null, { status: 404 })
        // }),
        http.get(BASE_URL, () => {
          return new HttpResponse(null, {
            status: 404,
          })
        }),
      ],
    },
  },
}

export const Error: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=2152-3158&mode=design&t=SbVZiTzcqGjjVsMy-4',
    },
    msw: {
      handlers: [
        http.get(BASE_URL, () => {
          return new HttpResponse(null, {
            status: 500,
          })
        }),
      ],
    },
  },
}
