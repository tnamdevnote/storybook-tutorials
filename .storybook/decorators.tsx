
import { ThemeProvider } from 'styled-components';
import { Decorator } from '@storybook/react'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { Provider as StoreProvider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../src/app-state'
import { lightTheme, darkTheme } from '../src/styles/theme'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

const withRouter: Decorator = (StoryFn, { parameters: { deeplink }}) => {

  if(!deeplink) {
    return <BrowserRouter><StoryFn /></BrowserRouter>
  }

  const { path, route } = deeplink
  return (
    <MemoryRouter initialEntries={[encodeURI(route)]}>
      <Routes>
        <Route path={path} element={<StoryFn />} />
      </Routes>
    </MemoryRouter>
  )
}

const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme;
return (
  <ThemeProvider theme={storyTheme}>
    <GlobalStyle />
    <StoryFn />
  </ThemeProvider>
)}

const withStore: Decorator = (StoryFn, { parameters }) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: parameters.store?.initialState
  })
  return (
    <StoreProvider store={store}>
      <StoryFn />
    </StoreProvider>
  )
}

export const globalDecorators = [
  withTheme,
  withRouter,
  withStore
]
