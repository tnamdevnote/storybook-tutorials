import { Meta, StoryObj } from '@storybook/react'

import { cartItems as items } from '../stub/cart-items'

import { PageTemplate } from './PageTemplate'

const meta: Meta<typeof PageTemplate> = {
  title: 'Template/Pages',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof PageTemplate>

function DummyComponent({ children }: { children: React.ReactNode }) {
  return <div style={{ padding: 60 }}>{children}</div>
}

export const Default: Story = {
  args: {
    children: (
      <DummyComponent>
        Default template with scrollable header and navigation items + Footer
      </DummyComponent>
    ),
  },
}

export const WithItemsInTheCart: Story = {
  parameters: {
    store: {
      initialState: { cart: { items } },
    },
  },
}

export const StickyHeader: Story = {
  args: {
    type: 'sticky-header',
    children: (
      <DummyComponent>
        Default template with scrollable header and navigation items + Footer
      </DummyComponent>
    ),
  },
}

export const Basic: Story = {
  args: {
    type: 'basic',
    children: (
      <DummyComponent>
        Default template with scrollable header and navigation items + Footer
      </DummyComponent>
    ),
  },
}
