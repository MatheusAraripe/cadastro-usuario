import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Radio, RadioGroup, FormControlLabel } from '@mui/material'
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

function InputRatio({name, value, control,error, helperText}) {

  const [selected, setSelected] = useState("Feminino")
  const handleSelect = (e) => {
    setSelected(e.target.value)
  }
  return (
    <Controller
    name={name}
    control={control}
    defaultValue={value}
    render={({field}) => (
        <RadioGroup
        {...field}
        defaultValue='Feminino'
        fullWidth
        row
        error={error}
        helperText={helperText}
        >
            <FormControlLabel 
            value="Feminino"
            control={<Radio icon={<FemaleIcon sx={{color: 'purple.text'}}/>} checkedIcon={<FemaleIcon color='secondary'/>}/>}
            label="Feminino" 
            onClick={handleSelect}
            sx={selected === 'Feminino' && {borderBottom: '1px solid'}}
            />

            <FormControlLabel 
            value="Masculino" 
            control={<Radio icon={<MaleIcon sx={{color: 'purple.text'}}/>} checkedIcon={<MaleIcon color='secondary'/>}/>} 
            label="Masculino"
            onClick={handleSelect}
            sx={selected === 'Masculino' && {borderBottom: '1px solid'}}
            />
        </RadioGroup>
    )}
    />
  )
}

export default InputRatio