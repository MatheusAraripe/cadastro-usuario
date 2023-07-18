import { Drawer,Box } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

function Navbar() {
  return (
    <Drawer variant='permanent' >
      <Box
      m={2}
      display={'flex'}
      justifyContent={'space-around'}
      alignItems={"center"}
      height={"100%"}
      width={"15vh"}
      >
        <p>navBar</p>
      </Box>
    </Drawer>
  )
}

export default Navbar