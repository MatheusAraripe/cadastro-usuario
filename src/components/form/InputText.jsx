import React from 'react'
import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

function InputText({name, control, lable, error, helperText, value, onBlur}) {
  return (
    <Controller
    name={name}
    control={control}
    defaultValue={value}
    render={({field}) => (
        <TextField
        {...field}
        label={lable}
        variant="outlined"
        color='secondary' 
        fullWidth
        error={error}
        helperText={helperText}
        onBlur={onBlur}
        />
    )}
    />
  )
}

export default InputText