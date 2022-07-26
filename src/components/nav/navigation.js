import test from '../../resources/test.png'
import React, { useState,useEffect,useRef } from "react"
import { View } from "../../defaultStyles"
import * as e from './navigationComponents'
import { Link } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css';
import usflag from '../../resources/usflag.svg'
import spainflag from '../../resources/esflag.svg'
import { navigation as tr } from '../../translations'

const Navigation = (prop) =>{
const [isOpen, setOpen] = useState(false)
const navRef = useRef(null)
const scrollUpRef = useRef(null)
const languageSettingsRef = useRef(null)
const [ navItems ] = useState([
    { title: tr[0].item0, path:"/", id:0 },
    { title: tr[0].item1, path:"/habilidades", id: 2 },
    { title: tr[0].item2, path:"/tecnologias", id: 1 },
    { title: tr[0].item3, path:"/proyectos", id: 3 },
    { title: tr[0].item4, path:"/cursos", id: 4 },
    { title: tr[0].item5, path:"/acerca-de", id: 5 },
    { title: tr[0].item6, path:"/contacto", id: 6 },
])
const smoothScroll = () => {
window.scrollTo({
  top: 0,
  behavior: 'smooth',
})
}
const handleLanguage = () =>{
    if(prop.lan === "es"){
        prop.setLan("en")
        localStorage.setItem('@app:lang','en')
    }else if(prop.lan === "en"){
        prop.setLan("es")
        localStorage.setItem('@app:lang','es')
    }
    window.location.reload()
}
useEffect(()=>{
    AOS.init();
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navRef.current.style.top = "2%";
    languageSettingsRef.current.style.top="92%"
    if(currentScrollPos <= 15){
    scrollUpRef.current.style.top="120%";
        navRef.current.style.width = "95%";
        navRef.current.style.borderRadius = "20px";
        navRef.current.style.top= "20px";
    }else{
        navRef.current.style.width = "100%";
        navRef.current.style.borderRadius = "0";
        navRef.current.style.top= "5px";
    }
  } else {
    languageSettingsRef.current.style.top="120%"
    navRef.current.style.top = "-8%";
    scrollUpRef.current.style.top="92%";
  }
  prevScrollpos = currentScrollPos;
}
},[prop.theme])
const themeToggler = () => {
if(prop.theme === "light"){
    prop.setTheme("dark");
    localStorage.setItem("@app:theme", "dark");
}else if(prop.theme === "dark"){
    prop.setTheme("light");
    localStorage.setItem("@app:theme", "light");
}
}
    return (
        <>
            <e.Nav ref={navRef} height={isOpen ? 615 : null}>
                <Link to="/inicio" onClick={()=>{ prop.setNavItemIdChecked(0); localStorage.setItem("@app:nav:itemId",0) }}><e.Logo alt="logo" src={test}/></Link>
            <e.NavItems>
                {navItems.map((item,KEY)=>{
                    return(
                        <View key={KEY}>
                            {prop.navItemIdChecked == item.id ? <e.ItemWithoutEffect>{item.title}</e.ItemWithoutEffect> : <Link onClick={() => {prop.setNavItemIdChecked(item.id); localStorage.setItem('@app/nav:itemId', item.id); setOpen(o => !o)  }} to={item.path} style={{cursor:'default'}}><e.Item>{item.title}</e.Item></Link> }
                </View>
                    )
                })}
            </e.NavItems>
            <e.ViewR>
            {prop.theme === "light" ?
        <e.ToggleTheme pr={12} pl={3} bbrr={5} bblr={20} bg={'rgb(230,230,230)'} onClick={themeToggler}><e.ThemeModeView bg={'white'}><i className="gg-sun" style={e.moon}></i></e.ThemeModeView> <e.ToggleThemeText>Light</e.ToggleThemeText></e.ToggleTheme>
            : <e.ToggleTheme bblr={5} bbrr={20} bg={'#242424'} pl={12} pr={2} onClick={themeToggler} ><e.ToggleThemeText style={{paddingRight:'6px'}}>Dark</e.ToggleThemeText><e.ThemeModeView bg={'rgb(230,230,230)'}><i className="gg-moon" style={e.sun}></i></e.ThemeModeView></e.ToggleTheme>}
            <e.ButtonSecondary style={e.downloadCvStyle}>{tr[0].cvBut}</e.ButtonSecondary>
                <e.HamMenu color={prop.theme === "light" ? "#000" : "#fff"} opened={isOpen} onClick={() => setOpen((o) => !o)}/>
    </e.ViewR>
        </e.Nav>
            <e.ScrollUpView onClick={()=> smoothScroll() } ref={scrollUpRef}>
                <box-icon name='chevron-up' color={'#fff'} style={e.ScrollUpIc} ></box-icon>
            </e.ScrollUpView>
            <e.LanguageView onClick={handleLanguage} ref={languageSettingsRef}>
                <e.CurrentLanguageSvg style={prop.lan === "en" ? {width:'35px'} : null} src={prop.lan === "es" ? usflag:spainflag}/>
            </e.LanguageView>
        </>
    )
}
export default Navigation;
