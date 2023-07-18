import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import NewContact from './pages/NewContact'

const App = () => {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/newcontact' element={<NewContact />} />
      </Routes>
    </>
  )
}

export default App
