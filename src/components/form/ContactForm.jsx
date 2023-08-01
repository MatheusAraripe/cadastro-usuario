import { Grid, FormLabel, Button} from '@mui/material'
import {InputText, InputDate, InputRatio} from './index';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactsContext } from '../../context/ContactsContext';
import { makeStyles } from '@mui/styles';
import format from 'date-fns/format';
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

function ContactForm({setMyContacts, setAlert}) {

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
    
    // mostra o alerta de sucesso
    setAlert(true)
    reset();
  } 
  
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(dataSubmit)}>
            <Grid container rowSpacing={4} color='purple.text' backgroundColor="purple.main" p={2} justifyContent={'center'} borderRadius={'8px'}>
                <h2>Adicione um novo contato</h2>
                <Grid xs={12} sm={12} item>
                    <InputText 
                    name={'name'} 
                    control={control} 
                    lable={'Nome completo'} 
                    error={!!errors.name} 
                    helperText={errors.name?.message} 
                    value={''}/>
                </Grid>
                <Grid item xs={12}>
                    <InputText name={'cpf'} control={control} lable={'CPF'} error={!!errors.cpf} helperText={errors.cpf?.message} value={''}/>
                </Grid>
                <Grid item xs={12}>
                    <InputDate name={'date'} control={control} value={null} label={'Data de Nascimento'} error={!!errors.date} helperText={errors.date?.message} />
                </Grid>
                <Grid xs={12}  item display={'flex'}  justifyContent={'start'} alignItems={'center'}>
                    <FormLabel id="genderLable" sx={{color: 'purple.text', marginRight: '3px'}} color='secondary'>Sexo</FormLabel>
                    <InputRatio name={'gender'} control={control} error={!!errors.gender} helperText={errors.gender?.message}/>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <InputText name={'address'} control={control} lable={'Endereço'} error={!!errors.address} helperText={errors.address?.message} value={''}/>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="text" fullWidth className={classes.btn} sx={{ color: 'purple.text'}}>Criar contato</Button>
                </Grid>
            </Grid>
    </form>
  )
}

export default ContactForm