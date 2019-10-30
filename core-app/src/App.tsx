import React from 'react'

import { TopAppBar } from './components/TopAppBar'
import { Router } from './components/Router'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'

const App = () => (
  <CssBaseline>
    <BrowserRouter>
      <TopAppBar />
      <Router />
    </BrowserRouter>
  </CssBaseline>
)

export { App }
