import React from 'react'
import { Box, IconButton } from '@mui/material'
import GroupAddTwoToneIcon from '@mui/icons-material/GroupAddTwoTone';

function ButtonFormResponsive({setIsOpen}) {

  return (
    <Box>
        <IconButton sx={{color: 'blue.dark', backgroundColor: 'blue.main', boxShadow: 2}} onClick={() => setIsOpen(true)}>
            <GroupAddTwoToneIcon fontSize='small'/>
        </IconButton>
    </Box>
  )
}

export default ButtonFormResponsive