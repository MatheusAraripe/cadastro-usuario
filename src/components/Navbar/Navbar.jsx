import { Drawer,Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CottageIcon from '@mui/icons-material/Cottage';
import './navbar.css'

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
        <Box my={3} >
          <Link to="/" className='navLink'>{<CottageIcon fontSize='medium'/>}</Link>
        </Box>
        <Box my={3}>
          <Link to="/newcontact" className='navLink'>{<GroupAddIcon fontSize='medium'/>}</Link>
        </Box>
        <Box my={3}>
        <Link to="/contacts" className='navLink'>{<RecentActorsIcon fontSize='medium'/>}</Link>
        </Box>
      </Box>
    </Drawer>

  )
}

export default Navbar