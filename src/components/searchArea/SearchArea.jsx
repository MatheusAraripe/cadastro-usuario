import { Grid } from '@mui/material'
import SearchBar from '../searchBar/SearchBar'
import SelectGender from '../selectGender/SelectGender'
import React from 'react'

function SearchArea({setMyContacts, setSearchValue, searchValue}) {
  return (
    <Grid container columnSpacing={1}>
        <Grid item xs={12} md={2}>
            <SelectGender setMyContacts={setMyContacts} searchValue={searchValue}/>
        </Grid>
        <Grid item xs={12} md={10}>
            <SearchBar setMyContacts={setMyContacts} setSearchValue={setSearchValue}/>
        </Grid>
    </Grid>
  )
}

export default SearchArea