import { Route,Routes } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Cris from './pages/CR7'
import Home from './pages/Home'

function App() {
  return (
     <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Cris' element={<Cris/>}/>
     </Routes>
     <Footer/>
     </>
  )
}

export default App
