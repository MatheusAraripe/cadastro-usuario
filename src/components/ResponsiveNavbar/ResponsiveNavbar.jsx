import { Tab } from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import { useNavigate, useLocation} from 'react-router-dom';
import React, { useState } from 'react'

function ResponsiveNavbar() {


  const location = useLocation();
  const [value, setValue] = useState(location.pathname);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(newValue)
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList centered textColor='secondary'  indicatorColor='secondary' onChange={handleChange}
      sx={{
        backgroundColor: 'purple.main', 
        borderRadius: '10px', 
        boxShadow: '12',
        }}>
        <Tab value='/' label='Home' />
        <Tab value='/contacts' label='Meus Contatos' />
      </TabList>
    </TabContext>
  )
}

export default ResponsiveNavbar