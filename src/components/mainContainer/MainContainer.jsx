import React from 'react'
import { Container, Box, Grid, Hidden } from '@mui/material'
import Navbar from '../Navbar/Navbar'

function MainContainer({ children, title }) {
  return (
    <Container sx={{height: "100vh"}} maxWidth={'100vh'}>
        <Grid container>
            {/* esconde a navbar para mobile */}
            <Hidden mdDown>
                <Grid item md={2} sm={2}>
                    <Navbar />
                </Grid>
            </Hidden>
            <Grid item md={8} sm={12} xs={12}>
                <Box my={15} >
                    <h1>{title}</h1>
                    {children}
                </Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default MainContainer