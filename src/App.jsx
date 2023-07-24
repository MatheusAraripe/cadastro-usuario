import { Route, Routes } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './App.css'
import Home from './pages/Home/Home'
import Contacts from './pages/contacts/Contacts'


const App = () => {
  return(
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </LocalizationProvider>
  )
}

export default App
