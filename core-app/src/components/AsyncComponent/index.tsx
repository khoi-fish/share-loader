import React, { useState, useEffect } from 'react'
import script from 'scriptjs'

declare global {
  interface Window {
    [key: string]: {
      [key: string]: {
        [key: string]: React.Component
      }
    }
  }
}

type Props = {
  namespace: string
  pageName: string
  url: string
}

const Loading = <div>Loading...</div>

const AsyncComponent: React.FunctionComponent<Props> = ({
  url,
  namespace,
  pageName,
}) => {
  const [Component, setComponent] = useState(null)
  useEffect(() => {
    script(url, () => {
      setComponent(window['sample'][namespace][pageName])
    })
  }, [])

  return <>{Component ? Component : Loading}</>
}

export { AsyncComponent }
