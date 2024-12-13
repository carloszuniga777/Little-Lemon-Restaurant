import './App.css'
import { Routes, Route } from "react-router"
import { Header } from './components'
import { Page } from './components'
// import { Footer } from './components'
import { ErrorPageNotFound } from './components/ErrorPage/ErrorPageNotFound'

const HolaComponent = ()=> <h1>Hola</h1>


function App() {
  return (
    <>
      <div className='container'>
              <Header/>
              <Routes>
                <Route path="/" element={<Page />} />
                <Route path="/Reservacion-Mesa" element={ <HolaComponent/> } />
                <Route path='*' element={<ErrorPageNotFound/>} />
              </Routes>
      </div>
    </>
  )
}

export default App
