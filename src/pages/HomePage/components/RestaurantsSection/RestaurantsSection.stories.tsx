import { Meta, StoryObj } from '@storybook/react'

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
}
