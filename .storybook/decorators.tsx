
import { ThemeProvider } from 'styled-components';
// This should be "Decorator" in Version 7.0 and up.
import { DecoratorFn } from '@storybook/react'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { lightTheme, darkTheme } from '../src/styles/theme'
import React from 'react'

const withTheme: DecoratorFn = (StoryFn) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <StoryFn />
  </ThemeProvider>
)

export const globalDecorators = [
  withTheme,
]
