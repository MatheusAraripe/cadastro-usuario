import { Drawer,Box } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <Drawer variant='permanent'>
      <Box
      m={2}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={"center"}
      height={"100%"}
      width={"15vh"}
      >
        <Box my={3}>
          <p>Home</p>
        </Box>
        <Box my={3}>
          <p>Contatos</p>
        </Box>
        <Box my={3}>
          <p>Novo Contato</p>
        </Box>
      </Box>
    </Drawer>

  )
}

export default Navbar