import * as e from "./defaultStyles"
import { GlobalStyles, light, dark } from "./themes"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { Route,Routes } from "react-router-dom"
//function & footer & Navigation
import ScrollTop from './func/scrollTop'
import Nav from "./components/nav/navigation"
import Footer from "./components/footer/footer"
//path routes
import AboutMe from "./components/aboutme/aboutme"
import Home from "./components/home/home"
import Technologies from './components/Technologies/technologies'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Courses from './components/courses/courses'
import Contact from './components/contact/contact'
function App() {
const [theme,setTheme] = useState( localStorage.getItem('@app:theme') == null ? "light" : localStorage.getItem("@app:theme") )
const [ navItemIdChecked, setNavItemIdChecked ] = useState(localStorage.getItem('@app/nav:itemId') == null ? 0 :localStorage.getItem('@app/nav:itemId'))
  return (
    <ThemeProvider theme={ theme === "light" ? light : dark }>
        <Nav theme={theme} navItemIdChecked={navItemIdChecked} setNavItemIdChecked={setNavItemIdChecked} setTheme={setTheme}/>
        <ScrollTop/>
        <GlobalStyles/>
        <Routes>
            <Route path='/' element={<Home theme={theme} setNavItemIdChecked={setNavItemIdChecked}/>}/>
            <Route path='/tecnologias' element={<Technologies/>}/>
            <Route path='/habilidades' element={<Skills/>}/>
            <Route path='/proyectos' element={<Projects/>}/>
            <Route path='/cursos' element={<Courses/>}/>
            <Route path='/contacto' element={<Contact/>}/>
            <Route path='/acerca-de' element={<AboutMe/>}/>
        </Routes>
        <Footer navItemIdChecked={navItemIdChecked} setNavItemIdChecked={setNavItemIdChecked}/>
    </ThemeProvider>
  );
}

export default App;
