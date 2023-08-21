import { Drawer,Box } from '@mui/material'
import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import ContactsTwoToneIcon from '@mui/icons-material/ContactsTwoTone';
import OtherHousesTwoToneIcon from '@mui/icons-material/OtherHousesTwoTone';
import './navbar.css'

function Navbar() {

  const location = useLocation();

  return (
    <Drawer variant='permanent'>
      <Box
      m={2}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={"center"}
      height={"100%"}
      width={{xl: '8vh', lg: "6vh", md: '4vh'}}
      >
        <Box my={3} >
          <Link to="/" className='navLink'>{<OtherHousesTwoToneIcon fontSize='medium' sx={location.pathname==='/'?{color: 'green.main'}:{color: ''}}/>}</Link>
        </Box>
        <Box my={3}>
        <Link to="/contacts" className='navLink'>{<ContactsTwoToneIcon fontSize='medium' sx={location.pathname==='/contacts'?{color: 'green.main'}:{color: ''}}/>}</Link>
        </Box>
      </Box>
    </Drawer>
  )
}

export default Navbar