import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Footer } from './Components/Footer/Footer.jsx'
import { Home } from './Pages/Home/Home.jsx'
import { Projects } from './Pages/Projects/Projects.jsx'
import { AboutUs } from './Pages/About Us/AboutUs.jsx'
import { Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Navbar/>
            

            <Routes>

                <Route path='/' element={<Home/>}/>

                <Route path='/Projects' element={<Projects/>}/>

                <Route path='/AboutUs' element={<AboutUs/>}/>

            </Routes>

            


            <Footer/>


        </>
    )
}

export default App