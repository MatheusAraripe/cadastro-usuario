import React from 'react'
import { Controller } from 'react-hook-form'
import { Radio, RadioGroup, FormControlLabel } from '@mui/material'
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

function InputRatio({name, value, control,error, helperText}) {
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
            control={<Radio disableRipple icon={<FemaleIcon sx={{color: 'purple.text'}}/>} checkedIcon={<FemaleIcon color='secondary'/>}/>}
            label="Feminino" />
            <FormControlLabel 
            value="Masculino" 
            control={<Radio disableRipple icon={<MaleIcon sx={{color: 'purple.text'}}/>} checkedIcon={<MaleIcon color='secondary'/>}/>} 
            label="Masculino" />
        </RadioGroup>
    )}
    />
  )
}

export default InputRatio