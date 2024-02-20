module.exports = {
  staticDirs: ['../public'],
  stories: [
    '../src/docs/Introduction.stories.mdx',
    '../src/docs/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-designs',
    '@storybook/addon-mdx-gfm'
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {
    autodocs: true
  }
}
