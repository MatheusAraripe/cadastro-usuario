import React from 'react'
import { Button, Grid, FormLabel} from '@mui/material';
import ModalMain from '../modalMain/ModalMain'
import ModalContactsMain from './ModalContactsMain'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {InputText, InputRatio, InputDate} from '../form/index'


const validationSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  cpf: yup.string().required('O CPF é obrigatório').min(11, 'CPF incompleto').max(11,'CPF maior que o permitido'),
  address: yup.string().required('Endereço é obrigatório'),
  date: yup.date().required('Data obrigatória'),

});


function EditContactsModal({setEditModalOpen}) {

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const closeModal = () => {
    setEditModalOpen(false);
  }

  return (
    <ModalMain>
      <form>
        <ModalContactsMain>
            <Grid item xs={12} display={'flex'} justifyContent={'right'} alignItems={'center'}>
              <Button onClick={closeModal}>X</Button>
            </Grid>
            <Grid item xs={12}>
              <InputText 
              name={'name'} 
              control={control} 
              lable={'Nome completo'} 
              error={!!errors.name} 
              helperText={errors.name?.message} 
              value={'teste'}/>
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
          </ModalContactsMain>
      </form>
    </ModalMain>
  )
}

export default EditContactsModal