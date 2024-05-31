import './App.css'
import Home from './pages/Home'
import CreateUser from './pages/CreateUser'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UpdateUser from './pages/UpdateUser'

function App() {

  return (
    <div className='my-2 max-w-[1020px] mx-auto'>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<CreateUser />} />
        <Route path='/edit/:id' element={<UpdateUser />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
