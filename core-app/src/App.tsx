import React from 'react'

import { TopAppBar } from './components/TopAppBar'
import { Router } from './components/Router'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <TopAppBar />
    <Router />
  </BrowserRouter>
)

export { App }
