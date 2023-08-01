import React from 'react'
import { Controller } from 'react-hook-form'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function InputDate({name, control, value, label, error, helperText}) {
    
  const myErr = error
  const helperTxt = helperText

  return (
    <Controller
    name={name}
    control={control}
    defaultValue={value}
    render={({field}) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            {...field}
            label={label} 
            sx={{width: '100%'}}
            format='DD/MM/YYYY'
            slotProps={{
                textField:{
                    variant: 'outlined',
                    error: myErr,
                    helperText: helperTxt,
                }
            }}
            />
        </LocalizationProvider>
    )}
    />
  )
}

export default InputDate