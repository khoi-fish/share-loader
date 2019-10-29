import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ROUTES } from './routes'

const Router = () => (
  <Switch>
    {ROUTES.map(({ route, component }) => (
      <Route key={route} exact path={route} render={component} />
    ))}
  </Switch>
)

export { Router }
