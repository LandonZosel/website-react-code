import Header from './components/header/Header'
import Home from "./pages/Home"
import Instruments from "./pages/Instruments"
import MusicTheory from "./pages/MusicTheory"
import ContactUs from "./pages/ContactUs"
import Account from "./pages/Account"
import Footer from './components/general/Footer'
import AuthGuard from './AuthGuard'
import { Routes, Route  } from "react-router"

import './App.css'


function App() {
  return (
    <div className="siteContainer">
      <Header/>
      <Routes>
        <Route path="/10/" element={<Home/>}/>
        <Route path="/10/instruments" element={
          <AuthGuard page={<Instruments/>}/>
        }/>
        <Route path="/10/music-theory" element={
          <AuthGuard page={<MusicTheory/>}/>
        }/>
        <Route path="/10/contact-us" element={
          <AuthGuard page={<ContactUs/>}/>
        }/>
        <Route path="/10/account" element={
          <AuthGuard page={<Account/>}/>
        }/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
