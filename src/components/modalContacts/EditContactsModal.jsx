import React, {useContext} from 'react'
import { ContactsContext } from '../../context/ContactsContext';
import { Button, Grid, FormLabel} from '@mui/material';
import ModalMain from '../modalMain/ModalMain'
import ModalContactsMain from './ModalContactsMain'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';
import format from 'date-fns/format';
import * as yup from 'yup';
import {InputText, InputRatio, InputDate} from '../form/index'


const validationSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  cpf: yup.string().required('O CPF é obrigatório').min(11, 'CPF incompleto').max(11,'CPF maior que o permitido'),
  address: yup.string().required('Endereço é obrigatório'),
  date: yup.date().required('Data obrigatória'),

});


function EditContactsModal({item, setEditModalOpen, setMyContacts}) {

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const {editContact, getContactsFromLs, newContact} = useContext(ContactsContext);

  const date = dayjs(item.date)

  const closeModal = () => {
    setEditModalOpen(false);
  }

  const handleEdit = (data) => {
    const formatDate = format(new Date(data.date), 'dd/MM/yyyy');

    // mudando o estado do meu arry de contatos para renderizar sem  precisar recarregar a página
    const contactArry = getContactsFromLs();
    const contact = contactArry.find(user => user.id === item.id);
    const index = contactArry.indexOf(contact);
    contactArry[index] = newContact(data.name, data.cpf, data.address, formatDate, data.gender)
    setMyContacts(contactArry);

    // salvando no LocalStorage
    editContact(item.id, data.name, data.cpf, data.address, formatDate, data.gender);
    setEditModalOpen(false);
  }

  return (
    <ModalMain>
      <form onSubmit={handleSubmit(handleEdit)}>
        <ModalContactsMain>
            <Grid item xs={12} display={'flex'} justifyContent={'right'} alignItems={'center'}>
              <Button onClick={closeModal}>X</Button>
            </Grid>
            <Grid item xs={12}>
              <InputText name={'name'} control={control} lable={'Nome completo'} error={!!errors.name} helperText={errors.name?.message} value={item.name}/>
            </Grid>
            <Grid item xs={12}>
              <InputText name={'cpf'} control={control} lable={'CPF'} error={!!errors.cpf} helperText={errors.cpf?.message} value={item.cpf}/>
            </Grid>
            <Grid item xs={12}>
              <InputDate name={'date'} control={control} value={date} label={'Data de Nascimento'} error={!!errors.date} helperText={errors.date?.message} />
            </Grid>
            <Grid xs={12}  item display={'flex'}  justifyContent={'start'} alignItems={'center'}>
              <FormLabel id="genderLable" sx={{color: 'purple.text', marginRight: '3px'}} color='secondary'>Sexo</FormLabel>
              <InputRatio name={'gender'} value={item.gender} control={control} error={!!errors.gender} helperText={errors.gender?.message}/>
            </Grid>
            <Grid item xs={12} sm={12}>
              <InputText name={'address'} control={control} lable={'Endereço'} error={!!errors.address} helperText={errors.address?.message} value={item.address}/>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="text" fullWidth onClick={handleEdit}>Confirmar</Button>
            </Grid>
          </ModalContactsMain>
      </form>
    </ModalMain>
  )
}

export default EditContactsModal