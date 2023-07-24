import { TextField, Radio, RadioGroup, Grid, FormControlLabel, FormControl, FormLabel, Button} from '@mui/material'
import { makeStyles } from '@mui/styles';
import { DatePicker } from '@mui/x-date-pickers';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import React from 'react'

const useStyles = makeStyles({
    btn:{
        '&:hover':{
            backgroundColor: '#484D98'
        }
    }
});

function ContactForm() {
  
  const classes = useStyles()
  return (
    <FormControl fullWidth>
        <Grid container bgcolor={'purple.main'} mt={12} rowSpacing={2} color='purple.text' columnSpacing={1} borderRadius={2} pb={2}>
            <Grid xs={12} sm={12} item>
                <TextField id="name" label="Nome completo" variant="outlined" fullWidth color="secondary"/>
            </Grid>
            <Grid item xs={12} sm={5} >
                <TextField id="cpf" label="CPF" variant="outlined" fullWidth color="secondary"/>
            </Grid>
            <Grid item xs={12} sm={4} >
                <DatePicker label="Data de nascimento" sx={{width: '100%'}}/>
            </Grid>
            <Grid xs={12} sm={3} item display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <FormLabel id="genderLable" sx={{color: 'purple.text', marginRight: '3px'}} color='secondary'>Sexo</FormLabel>
                <RadioGroup
                defaultValue="female"
                fullWidth
                name="genderOptions"
                row
                >
                    <FormControlLabel 
                    value="female"
                    control={<Radio disableRipple icon={<FemaleIcon sx={{color: 'purple.text'}}/>} checkedIcon={<FemaleIcon sx={{color: 'purple.dark'}}/>}/>}
                    label="Feminino" />
                    <FormControlLabel 
                    value="male" 
                    control={<Radio disableRipple icon={<MaleIcon sx={{color: 'purple.text'}}/>} checkedIcon={<MaleIcon sx={{color: 'purple.dark'}}/>}/>} 
                    label="Masculino" />
                </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField id='adresses' label='Endereço' variant='outlined' fullWidth color='secondary' />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" fullWidth className={classes.btn} sx={{backgroundColor: 'purple.dark', color: 'purple.main'}}>Adicionar contato</Button>
            </Grid>
        </Grid>
    </FormControl>
  )
}

export default ContactForm