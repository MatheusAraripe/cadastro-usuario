import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NewContact from './pages/NewContact'
import Contacts from './pages/contacts/Contacts'


const App = () => {
  return(
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newcontact' element={<NewContact />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
  )
}

export default App
