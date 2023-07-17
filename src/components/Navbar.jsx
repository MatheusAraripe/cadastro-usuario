import { Tabs,Tab,Box } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <Box sx={{height: "100vh", width: "20vh", backgroundColor: "red"}}>
        <Tabs
        orientation="vertical"
        sx={{display: 'flex', backgroundColor: "blue", justifyContent: 'space-evenly', height: "100%"}}
        >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
        </Tabs>
    </Box>
  )
}

export default Navbar