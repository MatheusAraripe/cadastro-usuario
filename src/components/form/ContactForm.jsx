import { TextField, Radio, RadioGroup, Grid, FormControlLabel, FormControl, FormLabel, Button, FormHelperText} from '@mui/material'
import * as yup from 'yup';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactsContext } from '../../context/ContactsContext';
import { makeStyles } from '@mui/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';
import format from 'date-fns/format';
import { DatePicker } from '@mui/x-date-pickers';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import React, {useContext} from 'react'

const useStyles = makeStyles({
    btn:{
        '&:hover':{
            backgroundColor: 'rgba(72, 77, 152, 0.1)'
        }
    }
});

const validationSchema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    cpf: yup.string().required('O CPF é obrigatório').min(11, 'CPF incompleto').max(11,'Formato inválido'),
    address: yup.string().required('Endereço é obrigatório'),
    date: yup.date().required('Data obrigatória'),
  
});

function ContactForm({setMyContacts}) {

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
      resolver: yupResolver(validationSchema)
    });


  const {addContact, newContact, getContactsFromLs} = useContext(ContactsContext);


  const dataSubmit = (data) => {
    const formatDate = format(new Date(data.date), 'dd/MM/yyyy');

    const LsContacts = getContactsFromLs();
    // hook apenas para renderizar os contatos de maneira automática na tela
    setMyContacts([...LsContacts, newContact(data.name, data.cpf, data.address, formatDate, data.gender)])

    // depois de renderizar na tela adiciona ao local storage
    addContact(data.name, data.cpf, data.address, formatDate, data.gender)
    reset();
  } 
  
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(dataSubmit)}>
            <Grid container rowSpacing={4} color='purple.text' backgroundColor="purple.main" p={2} justifyContent={'center'} borderRadius={'8px'}>
                <h2>Adicione um novo contato</h2>
                <Grid xs={12} sm={12} item>
                    <Controller
                    name="name"
                    control={control}
                    defaultValue=''
                    render={({field}) => (
                        <TextField
                        {...field}
                        label='Nome completo' 
                        variant="outlined" 
                        fullWidth
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        />
                    )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        name="cpf"
                        control={control}
                        defaultValue=""
                        render={({field}) => (
                            <TextField
                            {...field}
                            label="CPF" 
                            variant="outlined" 
                            fullWidth 
                            error={!!errors.cpf}
                            helperText={errors.cpf?.message}
                            />
                        )}/>
                </Grid>
                <Grid item xs={12}  >
                    <Controller
                    name="date"
                    control={control}
                    defaultValue={null}
                    render={({field}) => (
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                            {...field}
                            label="Data de nascimento" 
                            sx={{width: '100%'}}
                            format='DD/MM/YYYY'
                            slotProps={{
                                textField:{
                                    variant: 'outlined',
                                    error: !!errors.date,
                                    helperText: errors.date?.message,
                                }
                            }}
                            />
                        </LocalizationProvider>
                    )}
                    />
                </Grid>
                <Grid xs={12}  item display={'flex'}  justifyContent={'start'} alignItems={'center'}>
                    <FormLabel id="genderLable" sx={{color: 'purple.text', marginRight: '3px'}} color='secondary'>Sexo</FormLabel>
                    <Controller
                    name="gender"
                    control={control}
                    defaultValue="Feminino"
                    render={({field}) => (
                        <RadioGroup
                        {...field}
                        defaultValue='Feminino'
                        fullWidth
                        row
                        error={!!errors.gender}
                        helperText={errors.gender?.message}
                        >
                            <FormControlLabel 
                            value="Feminino"
                            control={<Radio disableRipple icon={<FemaleIcon sx={{color: 'purple.text'}}/>} checkedIcon={<FemaleIcon sx={{color: 'purple.dark'}}/>}/>}
                            label="Feminino" />
                            <FormControlLabel 
                            value="Masculino" 
                            control={<Radio disableRipple icon={<MaleIcon sx={{color: 'purple.text'}}/>} checkedIcon={<MaleIcon sx={{color: 'purple.dark'}}/>}/>} 
                            label="Masculino" />
                        </RadioGroup>
                    )}
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Controller
                    name="address"
                    control={control}
                    defaultValue=""
                    render={({field}) => (
                        <TextField
                        {...field}
                        label='Endereço' 
                        variant='outlined'
                        fullWidth
                        error={!!errors.address}
                        helperText={errors.address?.message}
                        />
                    )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="text" fullWidth className={classes.btn} sx={{ color: 'purple.text'}}>Criar contato</Button>
                </Grid>
            </Grid>
    </form>
  )
}

export default ContactForm