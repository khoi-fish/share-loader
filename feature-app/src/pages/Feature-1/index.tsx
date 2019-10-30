/// <reference types="react-vis-types" />

import 'react-vis/dist/styles/examples.scss'

import React from 'react'
import { Container, styled, Grid, Card, Typography } from '@material-ui/core'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from 'react-vis'

const StyledContainer = styled(Container)({
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
})

const StyledGridContainer = styled(Grid)({
  margin: 0,
  marginTop: '50px',
  justifyContent: 'center',
})

const StyledCard = styled(Card)({
  minHeight: '50px',
  padding: '10px',
})

const data: Array<{
  color: number
  key: number
  data: Array<{ x: number; y: number }>
  opacity: number
}> = []

for (let i = 0; i < 20; i++) {
  const series = []
  for (let j = 0; j < 100; j++) {
    series.push({ x: j, y: (i / 10 + 1) * Math.sin((Math.PI * (i + j)) / 50) })
  }
  data.push({ color: i, key: i, data: series, opacity: 0.8 })
}

const Feature1 = () => (
  <StyledContainer>
    <XYPlot
      width={300}
      height={300}
      colorType="linear"
      colorDomain={[0, 9]}
      colorRange={['yellow', 'orange']}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      {data.map(props => (
        <LineSeries {...props} />
      ))}
    </XYPlot>

    <StyledGridContainer container>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <StyledCard raised>
          <Typography variant="subtitle1">
            This is a feature app that renders a graph using react-vis, a fairly
            heavy dependency. Because we've separated our app into micro
            frontends, the Home page doesn't have to download this code. This
            results in a faster time to first paint as well as less code being
            downloaded that may not be used.
          </Typography>
        </StyledCard>
      </Grid>
    </StyledGridContainer>
  </StyledContainer>
)

export { Feature1 }
