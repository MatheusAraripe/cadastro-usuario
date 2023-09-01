import React, {useContext} from 'react'
import { ContactsContext } from '../../context/ContactsContext';
import { Button, Grid, FormLabel} from '@mui/material';
import CancelPresentationTwoToneIcon from '@mui/icons-material/CancelPresentationTwoTone';
import ModalMain from '../modalMain/ModalMain'
import ModalContactsMain from './ModalContactsMain'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import format from 'date-fns/format';
import * as yup from 'yup';
import {InputText, InputRatio, InputDate} from '../form/index'
import { validate } from 'gerador-validador-cpf'


const validationSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  cpf: yup.string().required('O CPF é obrigatório').min(11, 'CPF incompleto').max(11,'CPF maior que o permitido'),
  date: yup.date().required('Data obrigatória'),
  cep: yup.string().required('CEP é obrigatório'),
  street: yup.string().required('Rua é obrigatório'),
  number: yup.number().required('Número é obrigatório'),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  city: yup.string().required('CIadde é obrigatória'),
  estate: yup.string().required('Estado é obrigatório'),

});


function EditContactsModal({item, setEditModalOpen, setMyContacts, setInfoAlert, setInfoCpfAlert, setInfoCpfValidationAlert}) {

  const { control, handleSubmit, setValue, setFocus, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const {editContact, getContactsFromLs, newContact, extractCpfNumbers, checkCpf} = useContext(ContactsContext);

  const formatCpf = extractCpfNumbers(item.cpf);

  const date = dayjs(item.date, 'DD/MM/YYYY');

  const checkCep = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      setValue('street', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setValue('estate', data.uf);
      setFocus('number');
    });
  }

  const closeModal = () => {
    setEditModalOpen(false);
  }

  const handleEdit = (data) => {
    if (checkCpf(data.cpf, item.id) === undefined){;
      if (validate(data.cpf) === false){
        setInfoCpfValidationAlert(true);
        setTimeout(() => {
          setInfoCpfValidationAlert(false);
        }, 4000);
      }else{
        const formatDate = format(new Date(data.date), 'dd/MM/yyyy');

        // mudando o estado do meu arry de contatos para renderizar sem  precisar recarregar a página
        const contactArry = getContactsFromLs();
        const contact = contactArry.find(user => user.id === item.id);
        const index = contactArry.indexOf(contact);
        contactArry[index] = newContact(data.name, data.cpf, data.cep, data.street, data.number, data.neighborhood, data.city, data.estate, data.complement, formatDate, data.gender)
        setMyContacts(contactArry);
    
        // salvando no LocalStorage
        editContact(item.id, data.name, data.cpf, data.cep,data.street, data.number, data.neighborhood, data.city, data.estate, data.complement,formatDate, data.gender);
        setEditModalOpen(false);
        setInfoAlert(true);
        setTimeout(() => {
          setInfoAlert(false);
        }, 4000);
        reset();
      }
    }else{
      setInfoCpfAlert(true)
      setTimeout(() => {
        setInfoCpfAlert(false);
      }, 4000);
    }
  }

  return (
    <ModalMain>
      <form onSubmit={handleSubmit(handleEdit)}>
        <ModalContactsMain isForm={true}>
            <Grid item xs={12} display={'flex'} justifyContent={'right'} alignItems={'center'}>
              <Button onClick={closeModal}><CancelPresentationTwoToneIcon color='error'/></Button>
            </Grid>
            <Grid item xs={12}>
              <InputText name={'name'} control={control} lable={'Nome completo'} error={!!errors.name} helperText={errors.name?.message} value={item.name}/>
            </Grid>
            <Grid item xs={6}>
              <InputText name={'cpf'} control={control} lable={'CPF'} error={!!errors.cpf} helperText={errors.cpf?.message} value={formatCpf}/>
            </Grid>
            <Grid item xs={6}>
              <InputDate name={'date'} control={control} value={date} label={'Data de Nascimento'} error={!!errors.date} helperText={errors.date?.message} />
            </Grid>
            <Grid item xs={12} sm={2} display={'flex'}  justifyContent={{sm: 'start', xs: 'center'}} alignItems={'center'}>
              <FormLabel id="genderLable" sx={{color: 'purple.dark', marginRight: '35px'}} color='secondary'>Sexo</FormLabel>
            </Grid>
            <Grid xs={12} sm={10} item display={'flex'} justifyContent={{sm: 'left', xs: 'center'}} alignItems={'center'}>
              <InputRatio name={'gender'} value={item.gender} control={control} error={!!errors.gender} helperText={errors.gender?.message}/>
            </Grid>
            <Grid item xs={5} sm={5}>
                <InputText name={'cep'} control={control} lable={'CEP'} error={!!errors.cep} helperText={errors.cep?.message} value={item.cep} onBlur={checkCep}/>
            </Grid>
            <Grid item xs={7} sm={7}>
                <InputText name={'neighborhood'} control={control} lable={'Bairro'} error={!!errors.neighborhood} helperText={errors.neighborhood?.message} value={item.neighborhood}/>
            </Grid>
            <Grid item xs={12} sm={12}>
                <InputText name={'street'} control={control} lable={'Rua'} error={!!errors.street} helperText={errors.street?.message} value={item.street}/>
            </Grid>
            <Grid item xs={4} sm={4}>
                <InputText name={'number'} control={control} lable={'Número'} error={!!errors.number} helperText={errors.number?.message} value={item.number}/>
            </Grid>
            <Grid item xs={8} sm={8}>
                <InputText name={'complement'} control={control} lable={'Complemento'} error={!!errors.complement} helperText={errors.complement?.message} value={item.complement}/>
            </Grid>
            <Grid item xs={9} sm={6}>
                <InputText name={'city'} control={control} lable={'Cidade'} error={!!errors.city} helperText={errors.city?.message} value={item.city}/>
            </Grid>
            <Grid item xs={3} sm={6}>
                <InputText name={'estate'} control={control} lable={'Estado'} error={!!errors.estate} helperText={errors.estate?.message} value={item.estate}/>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="text" fullWidth>Confirmar</Button>
            </Grid>
          </ModalContactsMain>
      </form>
    </ModalMain>
  )
}

export default EditContactsModal