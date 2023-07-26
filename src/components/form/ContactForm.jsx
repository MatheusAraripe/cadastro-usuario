import { TextField, Radio, RadioGroup, Grid, FormControlLabel, FormControl, FormLabel, Button, FormHelperText} from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { makeStyles } from '@mui/styles';
import { DatePicker } from '@mui/x-date-pickers';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import React from 'react'
import dayjs from 'dayjs';

const useStyles = makeStyles({
    btn:{
        '&:hover':{
            backgroundColor: 'rgba(72, 77, 152, 0.1)'
        }
    }
});

function ContactForm() {

  const validationSchema = yup.object().shape({
        name: yup.string().required('O nome é obrigatório'),
        cpf: yup.string().required('O CPF é obrigatório').min(11, 'CPF incompleto').max(11,'Formato inválido'),
        address: yup.string().required('Endereço é obrigatório'),
        date: yup.date().required('Data obrigatória'),
    });



  // Configurar o useFormik com a resolução do Yup
  const formik = useFormik({
    initialValues: {
      name: '',
      cpf: '',
      address: '',
      date: null,
    },
    validationSchema,
    onSubmit: (values) => {
      // Lógica para lidar com o envio do formulário
      console.log(values);
    },
  });
  
  const classes = useStyles()
  return (
    <form onSubmit={formik.handleSubmit}>
            <Grid container rowSpacing={4} color='purple.text' backgroundColor="purple.main" p={2} justifyContent={'center'} borderRadius={'8px'}>
                <h2>Adicione um novo contato</h2>
                <Grid xs={12} sm={12} item>
                    <FormControl fullWidth error={formik.touched.name && Boolean(formik.errors.name)}>
                        <TextField 
                        name='name' 
                        label='Nome completo' 
                        variant="outlined" 
                        fullWidth 
                        color="secondary"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && <FormHelperText>{formik.errors.name}</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth error={formik.touched.cpf && Boolean(formik.errors.cpf)}>
                        <TextField 
                        name="cpf" 
                        label="CPF" 
                        variant="outlined" 
                        fullWidth 
                        color="secondary"
                        value={formik.values.cpf}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.cpf && <FormHelperText>{formik.errors.cpf}</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item xs={12}  >
                    <FormControl fullWidth error={formik.touched.cpf && Boolean(formik.errors.cpf)}>
                        <DatePicker
                        value={formik.values.date}
                        onChange={(value) => formik.setFieldValue('date', value)}
                        onBlur={formik.handleBlur}
                        label="Data de nascimento" 
                        sx={{width: '100%'}}
                        />
                        {/* {formik.touched.date && <FormHelperText>{formik.errors.date}</FormHelperText>} */}
                    </FormControl>
                </Grid>
                <Grid xs={12}  item display={'flex'}  justifyContent={'start'} alignItems={'center'}>
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
                    <FormControl fullWidth error={formik.touched.address && Boolean(formik.errors.address)}>
                        <TextField 
                        name='address' 
                        label='Endereço' 
                        variant='outlined' 
                        fullWidth 
                        color='secondary'
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.address && <FormHelperText>{formik.errors.address}</FormHelperText>}
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="text" type="submit" fullWidth className={classes.btn} sx={{ color: 'purple.text'}}>Criar contato</Button>
                </Grid>
            </Grid>
    </form>
  )
}

export default ContactForm