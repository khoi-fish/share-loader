import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Feature1 } from './pages/Feature-1'

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Feature1} />
  </BrowserRouter>
)

export { App }
