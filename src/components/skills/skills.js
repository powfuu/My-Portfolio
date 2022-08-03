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
import { skills as tr } from '../../translations.js' 
const Skills = () =>{ 
    let tools = [
        { id:1, title:'Figma', question:tr[0].question1, desc:tr[0].answer1, ic:figmasvg },
        { id:2, title:'Photoshop & Gimp', question:tr[0].question2, desc:tr[0].answer2, ic:photoshopsvg }, 
        { id:3, title:'Vim', question:tr[0].question3, desc:tr[0].answer3, ic:vimsvg },
        { id:4, title:'Bash', question:tr[0].question4, desc:tr[0].answer4, ic:bashsvg },
    ]
    let skills = [
        { id:1, title:tr[0].title1, svg: ussvg},
        { id:2, title:tr[0].title2, svg: autodidactsvg},
        { id:3, title:tr[0].title3, svg: responsivesvg},
        { id:4, title:tr[0].title4, svg: lightbulbsvg},
        { id:5, title:tr[0].title5, svg: stopwatchtimersvg}
    ]
return( 
    <View mgtop={100} mgleft={25} mgright={25} style={{marginBottom:'60px'}}> 
    <e.TitleView>   
        <e.TitleLine data-aos-offset='-300' data-aos='zoom-in-right'/>
        <e.Title data-aos-offset='-300' data-aos='zoom-in-left'>{tr[0].toolstext}</e.Title>
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
        <e.Title data-aos='zoom-in-left'>{tr[0].skillstext}</e.Title>
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
