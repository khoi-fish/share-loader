import React from 'react'
import { Home } from '../../pages/Home'
import { AsyncComponent } from '../AsyncComponent'

const ROUTES = [
  { label: 'home', route: '/', component: () => <Home /> },
  {
    label: 'Feature 1',
    route: '/feature1',
    component: () => (
      <AsyncComponent
        namespace="sample"
        url="http://localhost:4567/feature-app.js"
        pageName="Feature1"
      />
    ),
  },
]

export { ROUTES }
