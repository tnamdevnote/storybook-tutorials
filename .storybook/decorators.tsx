
import { ThemeProvider } from 'styled-components';
// This should be "Decorator" in Version 7.0 and up.
import { DecoratorFn } from '@storybook/react'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { lightTheme, darkTheme } from '../src/styles/theme'
import { BrowserRouter } from 'react-router-dom'
import { initialize, mswLoader, mswDecorator } from 'msw-storybook-addon'
import React from 'react'

// initialize()

const withRouter: DecoratorFn = (StoryFn) => {
  return <BrowserRouter><StoryFn /></BrowserRouter>
}

const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;
return (
  <ThemeProvider theme={storyTheme}>
    <GlobalStyle />
    <StoryFn />
  </ThemeProvider>
)}

export const globalDecorators = [
  withTheme,
  withRouter
]
