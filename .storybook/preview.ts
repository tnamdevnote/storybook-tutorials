import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { globalDecorators } from './decorators';
import { viewports as breakpoints } from '../src/styles/breakpoints'
import { initialize, mswLoader } from 'msw-storybook-addon';
import { Preview } from '@storybook/react';

// Create custom viewports using widths defined in design tokens
const breakpointViewports = Object.keys(breakpoints).reduce((acc, key) => {
  acc[`breakpoint${key}`] = {
    name: `Breakpoint - ${key}`,
    styles: {
      width: `${breakpoints[key as keyof typeof breakpoints]}px`,
      // Account for padding and border around viewport preview
      height: 'calc(100% - 20px)',
    },
    type: 'other',
  }
  return acc
}, {} as typeof INITIAL_VIEWPORTS)

/**
 * https://github.com/mswjs/msw-storybook-addon/issues/121
 * https://github.com/storybookjs/storybook/discussions/25049
 * use MSW addon beta version for now.
 * yarn add msw-storybook-addon@2.0.0--canary.122.b3ed3b1.0 -D
 */
initialize()

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
      viewports: {
        ...breakpointViewports,
        ...INITIAL_VIEWPORTS,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const loaders = [mswLoader]
export default preview;

export const decorators = globalDecorators;

export const globalTypes = {
  theme: {
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // The label to show for this toolbar item
      title: 'Theme',
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};
