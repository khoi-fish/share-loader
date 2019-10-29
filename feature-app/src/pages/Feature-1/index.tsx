import React from 'react'
import { Grid, Typography, Card } from '@material-ui/core'

const Feature1 = () => (
  <Grid container spacing={5}>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card raised>
        <Typography variant="body1">This is another feature</Typography>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card raised>
        <Typography variant="body1">This is another feature</Typography>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card raised>
        <Typography variant="body1">This is another feature</Typography>
      </Card>
    </Grid>
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card raised>
        <Typography variant="body1">This is another feature</Typography>
      </Card>
    </Grid>
  </Grid>
)

export { Feature1 }
