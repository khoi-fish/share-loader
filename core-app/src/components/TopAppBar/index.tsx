import React, { useState } from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { ROUTES } from '../Router/routes'
import { useHistory } from 'react-router'

const TopAppBar = () => {
  const history = useHistory()
  const [index, setIndex] = useState(ROUTES[0].route)
  const handleChange = (e: React.ChangeEvent<{}>, route: string) => {
    setIndex(route)
    history.push(route)
  }

  return (
    <AppBar position="static" color="default">
      <Tabs onChange={handleChange} value={index}>
        {ROUTES.map(({ label, route }) => (
          <Tab key={route} label={label} value={route} />
        ))}
      </Tabs>
    </AppBar>
  )
}

export { TopAppBar }
