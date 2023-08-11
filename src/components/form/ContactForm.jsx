import { Grid, FormLabel, Button} from '@mui/material'
import {InputText, InputDate, InputRatio} from './index';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactsContext } from '../../context/ContactsContext';
import { makeStyles } from '@mui/styles';
import format from 'date-fns/format';
// eslint-disable-next-line no-unused-vars
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
    cep: yup.string().required('CEP é obrigatório'),
    street: yup.string().required('Rua é obrigatório'),
    number: yup.number().required('Número é obrigatório'),
    neighborhood: yup.string().required('Bairro é obrigatório'),
    city: yup.string().required('CIadde é obrigatória'),
    estate: yup.string().required('Estado é obrigatório'),
    date: yup.date().required('Data obrigatória'),

});

// eslint-disable-next-line react/prop-types
function ContactForm({setMyContacts, setAlert}) {

  const { control, handleSubmit, setValue, setFocus, reset, formState: { errors } } = useForm({
      resolver: yupResolver(validationSchema)
    });

  const {addContact, newContact, getContactsFromLs} = useContext(ContactsContext);


  const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      setValue('street', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setValue('estate', data.uf);
      setFocus('number');
    });
  }


  const dataSubmit = (data) => {
    const formatDate = format(new Date(data.date), 'dd/MM/yyyy');

    const LsContacts = getContactsFromLs();
    // hook apenas para renderizar os contatos de maneira automática na tela
    setMyContacts([...LsContacts, newContact(data.name, data.cpf, data.cep,data.street, data.number, data.neighborhood, data.city, data.estate, data.complement,formatDate, data.gender)]);

    // depois de renderizar na tela adiciona ao local storage
    addContact(data.name, data.cpf, data.cep, data.street, data.number, data.neighborhood, data.city, data.estate, data.complement, formatDate, data.gender)

    // mostra o alerta de sucesso
    setAlert(true)
    reset();
  }

  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit(dataSubmit)}>
            <Grid container rowSpacing={2} columnSpacing={1} color={'secondary.main'} p={2} justifyContent={'center'}>
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
                <Grid item xs={6} sm={12}>
                    <InputText name={'cpf'} control={control} lable={'CPF'} error={!!errors.cpf} helperText={errors.cpf?.message} value={''}/>
                </Grid>
                <Grid item xs={6} sm={12}>
                    <InputDate name={'date'} control={control} value={null} label={'Data de Nascimento'} error={!!errors.date} helperText={errors.date?.message} />
                </Grid>
                <Grid xs={12}  item display={'flex'} justifyContent={'left'} alignItems={'center'}>
                    <FormLabel id="genderLable" sx={{color: 'purple.dark', marginRight: '50px'}}>Sexo</FormLabel>
                    <InputRatio name={'gender'} value={"Feminino"} control={control} error={!!errors.gender} helperText={errors.gender?.message}/>
                </Grid>
                <Grid item xs={5} sm={5}>
                    <InputText name={'cep'} control={control} lable={'CEP'} error={!!errors.cep} helperText={errors.cep?.message} value={''} onBlur={checkCep}/>
                </Grid>
                <Grid item xs={7} sm={7}>
                    <InputText name={'neighborhood'} control={control} lable={'Bairro'} error={!!errors.neighborhood} helperText={errors.neighborhood?.message} value={''}/>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <InputText name={'street'} control={control} lable={'Rua'} error={!!errors.street} helperText={errors.street?.message} value={''}/>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <InputText name={'number'} control={control} lable={'Número'} error={!!errors.number} helperText={errors.number?.message} value={''}/>
                </Grid>
                <Grid item xs={8} sm={8}>
                    <InputText name={'complement'} control={control} lable={'Complemento'} error={!!errors.complement} helperText={errors.complement?.message} value={''}/>
                </Grid>
                <Grid item xs={9} sm={6}>
                    <InputText name={'city'} control={control} lable={'Cidade'} error={!!errors.city} helperText={errors.city?.message} value={''}/>
                </Grid>
                <Grid item xs={3} sm={6}>
                    <InputText name={'estate'} control={control} lable={'Estado'} error={!!errors.estate} helperText={errors.estate?.message} value={''}/>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="text" fullWidth className={classes.btn} sx={{ color: 'purple.dark'}}>Criar contato</Button>
                </Grid>
            </Grid>
    </form>
  )
}

export default ContactForm
