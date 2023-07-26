import { TextField, Radio, RadioGroup, Grid, FormControlLabel, FormControl, FormLabel, Button, FormHelperText} from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';
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

function ContactForm() {

  const validationSchema = yup.object().shape({
        name: yup.string().required('O nome é obrigatório'),
        cpf: yup.string().required('O CPF é obrigatório').min(11, 'CPF incompleto').max(11,'Formato inválido'),
        address: yup.string().required('Endereço é obrigatório'),
        date: yup.date().required('Data obrigatória'),
      
    });


  const {addContact} = useContext(ContactsContext);

  // Configurar o useFormik com a resolução do Yup
  const formik = useFormik({
    initialValues: {
      name: '',
      cpf: '',
      address: '',
      gender: 'female',
      date: null,
    },
    validationSchema,
    onSubmit: (values) => {
      // Formate a data para o formato "DD/MM/YYYY"
      const formatDate = values.date? format(new Date(values.date), 'dd/MM/yyyy') : '';

      addContact(values.name, values.cpf, values.address, formatDate, values.gender)
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
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                            value={formik.values.date}
                            onChange={(value) => formik.setFieldValue('date', value)}
                            onBlur={formik.handleBlur}
                            label="Data de nascimento" 
                            sx={{width: '100%'}}
                            />
                            {formik.touched.date && <FormHelperText>{formik.errors.date}</FormHelperText>}
                        </LocalizationProvider>
                    </FormControl>
                </Grid>
                <Grid xs={12}  item display={'flex'}  justifyContent={'start'} alignItems={'center'}>
                    <FormControl fullWidth>
                        <FormLabel id="genderLable" sx={{color: 'purple.text', marginRight: '3px'}} color='secondary'>Sexo</FormLabel>
                        <RadioGroup
                        defaultValue={formik.values.gender}
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="gender"
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
                    </FormControl>
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