import { GlobalStyles, light, dark } from "./themes"
import { Loader } from "./defaultStyles"
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
import notfound from './resources/404.svg'
import test from './resources/test.png'
import * as e from './components/courses/coursesComponents.js'
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {
const [loaded,setLoaded]=useState(false)
const [lan, setLan]=useState(localStorage.getItem('@app:lang') == null ? "es" : localStorage.getItem("@app:lang"))
const [theme,setTheme] = useState( localStorage.getItem('@app:theme') == null ? "light" : localStorage.getItem("@app:theme") )
const [ navItemIdChecked, setNavItemIdChecked ] = useState(localStorage.getItem('@app/nav:itemId') == null ? 0 : localStorage.getItem('@app/nav:itemId'))
    useEffect(()=>{
        setTimeout(() => {
            document.body.style.transition='.4s all ease-in-out' 
        }, 1000);
    },[])
    useEffect(()=>{
        if(window.location.pathname === '/'){
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
        if(window.location.pathname != '/' && window.location.pathname != '/' && window.location.pathname != '/contacto' && window.location.pathname != '/acerca-de' && window.location.pathname != '/cursos' && window.location.pathname != '/proyectos' && window.location.pathname != '/habilidades' && window.location.pathname != '/tecnologias'){
            setNavItemIdChecked(7)
        }
        setTimeout(()=>{
            setLoaded(true)
        },2350)
    },[])
    useEffect(()=>{
        if(window.innerHeight <= 1133 && window.innerWidth <= 1782){
    AOS.init({
        once:true,
        offset:-999
    });
        }else{
    AOS.init({
        once:true,
        offset:0
    });
        }
    },[window.location.pathname])
  return (
    <ThemeProvider theme={ theme === "light" ? light : dark }>
        <ScrollTop/>
        <GlobalStyles/>

        {!loaded ?
                <div id='clip-body'>
                    <Loader/>
                    <img id='clip-logo' src={test}/>
                </div>
                    : <> 
                {navItemIdChecked != 7 ?
                <Nav lan={lan} setLan={setLan} theme={theme} navItemIdChecked={navItemIdChecked} setNavItemIdChecked={setNavItemIdChecked} setTheme={setTheme}/>
            : null}
                <div style={{minHeight:'100vh',overflow: 'hidden'}}>
        <Routes>
            <Route path='/' element={<Home theme={theme} setNavItemIdChecked={setNavItemIdChecked}/>}/>
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
                    </>
 }      
    </ThemeProvider>
  );
}

export default App;
