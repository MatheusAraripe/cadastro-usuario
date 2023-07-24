import { Tab } from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import React from 'react'

function ResponsiveNavbar() {
  return (
    <TabContext value={'1'} >
      <TabList centered textColor='secondary' indicatorColor='secondary'
      sx={{
        backgroundColor: 'purple.main', 
        borderRadius: '10px', 
        boxShadow: '12',
        }}>
        <Tab value={'1'} label='Home'/>
        <Tab value={'5'} label='Meus Contatos'/>
      </TabList>
    </TabContext>
  )
}

export default ResponsiveNavbar