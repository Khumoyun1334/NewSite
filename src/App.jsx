import { BiChevronsUp } from "react-icons/bi"; 
import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Project from './pages/Project'
import Team from './pages/Team'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'
import './App.css'
import Futter from './Components/Futter'

const App = () => {
    return (
        <div>
            <div>
                <a href='#hh' className='DDD flex justify-center items-center'><BiChevronsUp size={'30px'}/></a>
            </div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/service' element={<Service/>}/>
                <Route path='/project' element={<Project/>}/>
                <Route path='/team' element={<Team/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>

            <Futter/>

        </div>
    )
}

export default App
