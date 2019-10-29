import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const Home = () => (
  <Grid container spacing={5}>
    <Grid item xs={12}>
      <Typography variant="h2" gutterBottom>
        Ths is the core application.
      </Typography>
    </Grid>
  </Grid>
)

export { Home }
