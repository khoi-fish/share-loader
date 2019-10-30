import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Card, Container, Grid, Typography, styled } from '@material-ui/core'

const StyledContainer = styled(Container)({
  marginTop: '50px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
})

const StyledGridContainer = styled(Grid)({
  margin: 0,
})

const StyledCard = styled(Card)({
  minHeight: '50px',
  padding: '10px',
})

const MD = ReactMarkdown

const Home = () => (
  <StyledContainer>
    <StyledGridContainer container spacing={5}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <StyledCard raised>
          <Typography variant="subtitle1">
            <MD>
              Step 1: AsyncComponent makes a call to React
              `localhost:4567/feature-app.js`
            </MD>
          </Typography>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <StyledCard raised>
          <Typography variant="subtitle1">
            <MD>
              Step 2: `ScriptJS` loads the UMD into the specified namespace on
              the `Window` object
            </MD>
          </Typography>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <StyledCard raised>
          <Typography variant="subtitle1">
            <MD>
              Step 3: Webpack fills in the missing imports by reading from the
              `sample`object in the global namespace
            </MD>
          </Typography>
        </StyledCard>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <StyledCard raised>
          <Typography variant="subtitle1">
            <MD>
              Step 4: Console log `window.sample` to see what dependencies are
              currently being shared.
            </MD>
          </Typography>
        </StyledCard>
      </Grid>
    </StyledGridContainer>
  </StyledContainer>
)

export { Home }
