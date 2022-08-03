import { GlobalStyles, light, dark } from "./themes"
import { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { Route,Routes,Navigate} from "react-router-dom"
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
import { HashLoader } from 'react-spinners'
import notfound from './resources/404.svg'
import * as e from './components/courses/coursesComponents.js'

function App() {
const [loaded,setLoaded]=useState(false)
const [lan, setLan]=useState(localStorage.getItem('@app:lang') == null ? "es" : localStorage.getItem("@app:lang"))
const [theme,setTheme] = useState( localStorage.getItem('@app:theme') == null ? "light" : localStorage.getItem("@app:theme") )
const [ navItemIdChecked, setNavItemIdChecked ] = useState(localStorage.getItem('@app/nav:itemId') == null ? 0 : localStorage.getItem('@app/nav:itemId'))
    useEffect(()=>{
        if(window.location.pathname === '/inicio'){
            setNavItemIdChecked(0)
        }
        else if(window.location.pathname === '/tecnologias'){
            setNavItemIdChecked(1)
        }
        else if(window.location.pathname === '/habilidades'){
            setNavItemIdChecked(2)
        }
        else if(window.location.pathname === '/proyectos'){
            setNavItemIdChecked(3)
        }
        else if(window.location.pathname === '/cursos'){
            setNavItemIdChecked(4)
        }
        else if(window.location.pathname === '/acerca-de'){
            setNavItemIdChecked(5)
        }
        else if(window.location.pathname === '/contacto'){
            setNavItemIdChecked(6)
        }
        if(window.location.pathname != '/inicio' && window.location.pathname != '/' && window.location.pathname != '/contacto' && window.location.pathname != '/acerca-de' && window.location.pathname != '/cursos' && window.location.pathname != '/proyectos' && window.location.pathname != '/habilidades' && window.location.pathname != '/tecnologias'){
            setNavItemIdChecked(7)
        }
        // setLoaded(true)
        setTimeout(()=>{
            setLoaded(true)
        },3350)
    },[])
  return (
    <ThemeProvider theme={ theme === "light" ? light : dark }>
        <ScrollTop/>
        <GlobalStyles/>

        {!loaded ?
                <div style={{
            display:'flex',
            alignItems: 'center',
                }}>
                <HashLoader size={75} color={"#888"} style={{
                }}/>
                </div>
                    : <> 
                {navItemIdChecked != 7 ?
                <Nav lan={lan} setLan={setLan} theme={theme} navItemIdChecked={navItemIdChecked} setNavItemIdChecked={setNavItemIdChecked} setTheme={setTheme}/>
            : null}
                <div style={{minHeight:'100vh',overflow: 'hidden'}}>
        <Routes>
            <Route path='/' element={<Navigate to={navItemIdChecked == 0 ? "/inicio" : navItemIdChecked == 1 ? "/tecnologias" : navItemIdChecked == 2 ? "/habilidades" : navItemIdChecked == 3 ? "/proyectos" : navItemIdChecked == 4 ? "/cursos" : navItemIdChecked == 5 ? "/acerca-de" : navItemIdChecked == 6 ? "/contacto" : null}/>}/>
            <Route path='/inicio' element={<Home theme={theme} setNavItemIdChecked={setNavItemIdChecked}/>}/>
            <Route path='/tecnologias' element={<Technologies theme={theme}/>}/>
            <Route path='/habilidades' element={<Skills/>}/>
            <Route path='/proyectos' element={<Projects theme={theme}/>}/>
            <Route path='/cursos' element={<Courses/>}/>
            <Route path='/contacto' element={<Contact/>}/>
            <Route path='/acerca-de' element={<AboutMe/>}/>
            <Route
            path="*"
            element={
                <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', height:'77vh'}}>
                    <e.Img_404 src={notfound} data-aos='zoom-in-up'/>
                </div>
            }
          />
        </Routes>

                </div> 
        <Footer navItemIdChecked={navItemIdChecked} setNavItemIdChecked={setNavItemIdChecked}/>
                : </>
 }      
    </ThemeProvider>
  );
}

export default App;
