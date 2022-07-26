import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as e from './skillsComponents'
import { View } from "../../defaultStyles"
import figmasvg from '../../resources/tecsvg/figma.svg'
import photoshopsvg from '../../resources/tecsvg/photoshop.svg'
import vimsvg from '../../resources/tecsvg/vim.svg'
import bashsvg from '../../resources/tecsvg/bash.svg'
import ussvg from '../../resources/tecsvg/us.svg'
import stopwatchtimersvg from '../../resources/tecsvg/stopwatchtimer.svg'
import lightbulbsvg from '../../resources/tecsvg/lightbulb.svg'
import autodidactsvg from '../../resources/tecsvg/autodidact.svg'
import responsivesvg from '../../resources/tecsvg/responsive.svg'
const Skills = () =>{ 
    let tools = [
        { id:1, title:'Figma', question:'<Por qué utilizo Figma/>', desc:'Utilizo figma para crear diseños de mis web apps o aplicaciones móviles, me permite ahorrar tiempo y realizar diseños con más fácilidad.', ic:figmasvg },
        { id:2, title:'Photoshop & Gimp', question:'<Por qué utilizo GIMP & Photoshop/>', desc:'GIMP & Photoshop me permiten realizar ediciones o creaciones de iconos o imagenes. ', ic:photoshopsvg }, 
        { id:3, title:'Vim', question:'<Por qué utilizo Vim/>', desc:'Utilizo Vim para flexibilizar mi trabajo, está herramienta me permite ser mucho más rápido & eficaz a la hora de escribir código.', ic:vimsvg },
        { id:4, title:'Bash', question:'<Por qué utilizo Bash/>', desc:'Bash me permite controlar el sistema mediante la consola, esto me permite ser más rápido a la hora de crear/editar/buscar archivos o directorios.', ic:bashsvg },
    ]
    let skills = [
        { id:1, title:'Inglés Avanzado', svg: ussvg},
        { id:2, title:'100% Autodidacta', svg: autodidactsvg},
        { id:3, title:'100% Responsive', svg: responsivesvg},
        { id:4, title:'Gran Analísis & lógica y solución de problemas', svg: lightbulbsvg},
        { id:5, title:'Aprendizaje Rápido', svg: stopwatchtimersvg}
    ]
return( 
    <View mgtop={100} mgleft={25} mgright={25} style={{marginBottom:'60px'}}> 
    <e.TitleView>   
        <e.TitleLine data-aos-offset='-300' data-aos='zoom-in-right'/>
        <e.Title data-aos-offset='-300' data-aos='zoom-in-left'>Herramientas</e.Title>
    </e.TitleView>
    <e.ToolsView>
        {tools.map((t,KEY)=>{
            return(
                <e.ToolBox data-aos-offset='-250' data-aos='zoom-in-up' key={KEY}>
                    <e.ToolCircle data-aos='zoom-in-up' data-aos-offset='-300'>
                        <e.ToolCircleNumber>{t.id}</e.ToolCircleNumber>
                    </e.ToolCircle>     
                    <e.ToolQuestion data-aos='zoom-in-up' data-aos-offset='-280'>{t.question}</e.ToolQuestion>
                    <e.ToolDesc data-aos='zoom-in-up' data-aos-delay='400' data-aos-offset='-340'>{t.desc}</e.ToolDesc>
                    <e.ToolBoxTitleView data-aos='zoom-in-up' data-aos-delay='800' data-aos-offset='-450'>
                        <e.ToolBoxIcView>
                            <e.ToolBoxIc src={t.ic}/>
                        </e.ToolBoxIcView>
                        <e.ToolBoxTitle>{t.title}</e.ToolBoxTitle>
                    </e.ToolBoxTitleView>
                </e.ToolBox>
            )
        })}
    </e.ToolsView>
    <e.TitleView>   
        <e.TitleLine data-aos='zoom-in-right'/>
        <e.Title data-aos='zoom-in-left'>Habilidades</e.Title>
    </e.TitleView>
        <e.ToolsView data-aos='zoom-in-up' data-aos-duration='800' style={{marginTop:'50px'}}>
            <e.SkillsView>
        {skills.map((s, KEY)=>{
            return(
                <e.SkillBoxPolygon>
                <e.SkillBoxBehind data-aos-delay='350' data-aos-duration='300' data-aos='zoom-in-up' data-aos-offset='0'/> 
                <e.SkillBox key={KEY}>
                    <e.SkillSvg  ml={s.svg === ussvg ? 60 : s.svg === autodidactsvg ? 65 : s.svg === responsivesvg ? 55 : s.svg === lightbulbsvg ? 46 : 65} mt={s.svg === ussvg ? 65 : s.svg === autodidactsvg ? 55 : s.svg === responsivesvg ? 50 : s.svg === lightbulbsvg ? 44 : 60} height={s.svg === ussvg ? 30 : s.svg === autodidactsvg ? 42 : s.svg === responsivesvg ? 51 : s.svg === lightbulbsvg ? 55 : 40} style={s.svg === ussvg ? {background:'white'} : null} src={s.svg}/>
                    <e.SkillTitle style={s.svg===lightbulbsvg ? {fontSize:'12px',marginBottom:'28px'} : null}>{s.title}</e.SkillTitle>
                </e.SkillBox>
                </e.SkillBoxPolygon>
            )
        })}
</e.SkillsView>
    </e.ToolsView>
</View>
)
}
export default Skills;
