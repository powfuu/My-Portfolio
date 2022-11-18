import { useState, useRef } from 'react'
import * as e from './projectsComponents'
import { View } from "../../defaultStyles"
import inworkic from '../../resources/inworklogo.png'
import mochiic from '../../resources/tecsvg/angular.svg'
import fasfuic from '../../resources/fasfuic.webp'
import luckic from '../../resources/luckic.png'
import focusic from '../../resources/focuslogo.png'
import animatedportfolio from '../../resources/animatedportfolio.png'
import bash from '../../resources/bash.png'
import besigninvest from '../../resources/besigninvest.png'
import comingsoon from '../../resources/comingsoon.png'
import evercode from '../../resources/evercodelogo.png'
import fecmanager from '../../resources/feCManager.png'
import hackingservice from '../../resources/hackingservices.png'
import pizzahut from '../../resources/pizzahut.png'
import sharpdevelopment from '../../resources/sharp-development.svg'
import smallappslogo from '../../resources/smallappslogo.png'
import template1 from '../../resources/template1.svg'
import translators from '../../resources/translators.png'
import vanderbilt from '../../resources/vanderbilt.png'
import loc from '../../resources/loc.png'
import inworkbg from '../../resources/projectsbg/inwork.png'
import luckbg from '../../resources/projectsbg/luck.png'
import focusbg from '../../resources/projectsbg/focus.png'
import mochibg from '../../resources/projectsbg/mochi_template.png'
import bashbg from '../../resources/projectsbg/bash.jpg'
import smallapps from '../../resources/projectsbg/smallapps.png'
import evercodebg from '../../resources/projectsbg/evercode.png'
import evercodeservicesbg from '../../resources/projectsbg/evercodeservicesbg.png'
import comingsoonbg from '../../resources/projectsbg/comingsoon.png'
import translatorsbg from '../../resources/projectsbg/translators.png'
import templatebg from '../../resources/projectsbg/template.png'
import vanderbiltbg from '../../resources/projectsbg/vanderbilt.png'
import locbg from '../../resources/projectsbg/loc.png'
import sharpdevelopmentbg from '../../resources/projectsbg/sharpdevelopment.png'
import pizzahutbg from '../../resources/projectsbg/pizzahut.png'
import hackingservicesbg from '../../resources/projectsbg/hackingservices.png'
import fecmanagerbg from '../../resources/projectsbg/fecmanager.png'
import besigninvestbg from '../../resources/projectsbg/besigninvest.png'
import animatedportfoliobg from '../../resources/projectsbg/animatedportfolio.png'
import fasfubg from '../../resources/projectsbg/fasfu.png'
import { FadeLoader } from 'react-spinners'
import { Projects as tr } from "../../translations"

const Projects = (prop) =>{ 
    let desc1 = tr[0].desc1;
    let desc2 = tr[0].desc2;
    let desc3 = tr[0].desc3;
    let desc4 = tr[0].desc4;
    let desc5 = tr[0].desc5;
    let desc6 = tr[0].desc6;
    let desc7 = tr[0].desc7;
    let desc8 = tr[0].desc8;
    let desc9 = tr[0].desc9;
    let desc10 = tr[0].desc10;
    let desc11 = tr[0].desc11;
    let desc12 = tr[0].desc12;
    let desc13 = tr[0].desc13;
    let desc14 = tr[0].desc14;
    let desc15 = tr[0].desc15;
    let desc16 = tr[0].desc16;
    let desc17 = tr[0].desc17;
    let desc18 = tr[0].desc18;
    let desc19 = tr[0].desc19;
    let descloc = tr[0].descloc;
    const [selectedId, setSelectedId]=useState(1)
    let technologies = [
        { title:"inWork", t1:'JavaScript', t2:'React', t3:'React Native', t4:'HTML',t5:'CSS',t6:'AOS',t7:'MySQL',t8:'Node.js',t10:'Express',t11:'JWT Auth',t12:'bcrypt',t13:'NodeMailer',t14:'MulterJs',t15:'Axios',t16:'HTTP Requests',t17:'jQuery',t18:'Responsive'},
        { title:"Small Apps", t1:'HTML', t2:'CSS', t3:'JavaScript', t4:'Bootstrap', t5:'AOS', t6:'Animate.css', t7:'Responsive'},
        { title:"Bash Site", t1:'Angular', t2:'TypeScript', t3:'HTML', t4:'CSS', t5:'Responsive'},
        { title:"Coming Soon", t1:'HTML', t2:'CSS', t3:'JavaScript', t4:'Responsive'},
        { title:"Fasfu Burgers", t1:'HTML', t2:'CSS', t3:'JavaScript', t4:'Responsive', t5:'React', t6:'SCSS', t7:'Styled-Icons', t8:'Design Tools (Figma, GNU)'},
        { title:"Mochi Template", t1:'HTML', t2:'CSS', t3:'JavaScript', t4:'Responsive', t5: 'Angular', t6: 'Styled-Icons'},
        { title:"Luck", t1:'HTML', t2:'CSS', t3:'JavaScript', t4:'Responsive', t5:'Angular', t6:'Styled-icons', t7:'MySQL'},
        { title:"EVERCODE", t1:'JavaScript', t2:'React', t3:'React Native', t4:'HTML',t5:'CSS',t6:'AOS',t7:'MySQL',t8:'Node.js',t9:'',t10:'Express',t11:'JWT Auth',t12:'bcrypt',t13:'NodeMailer',t14:'MulterJs',t15:'Axios',t16:'HTTP Requests',t17:'jQuery',t18:'Responsive'},
        { title:"Focus", t1:'JavaScript', t2:'HTML', t3:'CSS', t4:'React', t5:'AOS', t6:'Node.Js', t7:'Express', t8:'JWT Auth', t9:'Axios', t10:'HTTP Requests', t11:'Responsive', t12:'bcrypt', t13:'MulterJs'},
        { title:"Translators", t1:'JavaScript' , t2:'HTML', t3:'CSS', t4:'AOS', t5:'Responsive'},
        { title:"Pizza Hut", t1:'JavaScript', t2:'HTML', t3:'CSS', t4:'Responsive', t5:'AOS'},
        { title:"Template", t1:'JavaScript',t2:'React', t3:'HTML', t4:'CSS', t5:'Responsive', t6:'AOS'},
        { title:"Vanderbilt", t1:'JavaScript', t2:'HTML', t3:'CSS', t4:'Responsive', t5:'AOS'},
        { title:"Sharp Development", t1:'JavaScript',t2:'HTML', t3:'CSS', t4:'Responsive', t5:'AOS'},
        { title:"EVERCODE Services", t1:'JavaScript', t2:'React', t3:'React Native', t4:'HTML',t5:'CSS',t6:'AOS',t7:'MySQL',t8:'Node.js',t9:'',t10:'Express',t11:'JWT Auth',t12:'bcrypt',t13:'NodeMailer',t14:'MulterJs',t15:'Axios',t16:'HTTP Requests',t17:'jQuery',t18:'Responsive'},
        { title:"Hacking Services", t1:'JavaScript', t2:'HTML', t3:'CSS', t4:'Responsive'},
        { title:"Template 2", t1:'JavaScript',t2:'React', t3:'HTML', t4:'CSS', t5:'Responsive', t6:'AOS'},
        { title:"Besign Invest", t1:'JavaScript', t3:'HTML', t4:'CSS', t5:'Responsive', t6:'AOS'},
        { title:"LOC", t1:'JavaScript', t7:'React', t8:'Vite', t9:'Tailwind', t4:'CSS', t5:'Responsive', t6:'AOS'},
        { title:"Animated Portfolio", t1:'JavaScript', t2:'React', t3:'Next.Js', t4:'HTML', t5:'CSS', t6:'Responsive', t7:'AOS'},
    ]
    let projects = [
        { id:1, title:'Fasfu Burgers', colorscheme:'#0306a6', ic: fasfuic, bg: fasfubg, desc:desc17, url:'https://fasfu-burgers.everit-jhon.com/' }, 
        { id:2, title:'inWork', colorscheme:'#2DA6A8', ic: inworkic, bg: inworkbg, desc:desc1, url:'https://inwork.everit-jhon.com/' }, 
        
{ id:3, colorscheme:'#26273B', title:'Bash Site', ic:bash, bg:bashbg, desc:desc3, url:'https://bash.everit-jhon.com/' },
        { id:4, title:'Luck', colorscheme:'#9057FE', ic: luckic, bg: luckbg, desc:desc18, url:'https://luck.everit-jhon.com/' }, 
        { id:5, colorscheme:'#00CBA9', title:'Coming Soon', ic:comingsoon, bg: comingsoonbg, desc:desc4, url:'https://coming-soon.everit-jhon.com/' },
        { id:6, colorscheme:'#ee3a43', title:'Mochi Template', ic:mochiic, bg: mochibg, desc:desc19, url:'https://mochi-template.everit-jhon.com/' },
        { id:7, colorscheme:'black', title:'EVERCODE', ic:evercode, bg:evercodebg, desc:desc5, url:'https://evercode.everit-jhon.com/' },
        { id:8, colorscheme:'#4A5587', title:'Small Apps', ic:smallappslogo, bg: smallapps, desc:desc2, url:'https://small-apps.everit-jhon.com/' },
        { id:9, colorscheme:'#FF008D', title:'Focus', ic:focusic, bg:focusbg, desc:desc6, url:'https://focus.everit-jhon.com/' },
        { id:10, colorscheme:'#5EABD5', title:'Translators', ic:translators, bg: translatorsbg, desc:desc7, url:'https://translators.everit-jhon.com/' },
        { id:11, colorscheme:'#EE3A43', title:'Pizza Hut', ic:pizzahut, bg: pizzahutbg, desc:desc8, url:'https://pizza-hut.everit-jhon.com/' },
        { id:12, colorscheme:'#F5C92C', title:'Template', ic:template1, bg: templatebg, desc:desc9, url:'https://template.everit-jhon.com/' },
        { id:13, colorscheme:'#E30613', title:'Vanderbilt', ic:vanderbilt, bg: vanderbiltbg, desc:desc10, url:'https://vanderbilt.everit-jhon.com/' },
        { id:14, colorscheme:'#5658DD', title:'Sharp Development', ic:sharpdevelopment, bg: sharpdevelopmentbg, desc:desc11, url:'https://sharp-development.everit-jhon.com/' },
        { id:15, colorscheme:'black', title:'EVERCODE Services', ic:evercode, bg: evercodeservicesbg, desc:desc12, url:'https://evercode-services.everit-jhon.com/' },
        { id:16, colorscheme:'#D5C396', title:'LOC', ic:loc , bg: locbg, desc:descloc, url:'https://leagueofchamps.everit-jhon.com/' },
        { id:17, colorscheme:'#5971F1', title:'Hacking Services', ic:hackingservice, bg: hackingservicesbg, desc:desc13, url:'https://hacking-services.everit-jhon.com/' },
        { id:18, colorscheme:'#209CEE', title:'Template 2', ic:fecmanager, bg: fecmanagerbg, desc:desc14, url:'https://template-2.everit-jhon.com/' },
        { id:19, colorscheme:'#00689F', title:'Besign Invest', ic:besigninvest, bg: besigninvestbg, desc:desc15, url:'https://besign-invest.everit-jhon.com/' },
        { id:20, colorscheme:'#44A0FB', title:'Animated Portfolio', ic:animatedportfolio, bg: animatedportfoliobg, desc:desc16, url:'https://animated-portfolio.everit-jhon.com/' },
    ]
    const imgRef=useRef(null)
    const handleUpdateId = id => {
window.scrollTo({
  top: 0,
  behavior: 'smooth',
})
if(selectedId != id){
            imgRef.current.style.filter="blur(20px)"
imgRef.current.style.opacity="0"
        setTimeout(()=>{
        setSelectedId(id)
        },300)
}
    }
return( 
<View> 
    <e.PreviewView>
        {projects.filter(fabiana=>fabiana.id === selectedId).map((fabiana)=>{
            return(
        <e.PreviewViewLeft data-aos-offset='-999' data-aos='fade-up' data-aos-duration='600'  data-aos-delay='250'>
            <e.PreviewLeftBg ref={imgRef} onLoad={()=>{
imgRef.current.style.opacity="1"
            imgRef.current.style.filter="blur(0px)"
            }} draggable={false} src={fabiana.bg}/>   
            <FadeLoader size={60} color={"#888"} style={{
                zIndex:'0',
                position:'absolute',
                transform:'translate(-50%,-50%)',
                top:'50%',
                left:'50%'
                }}/>
        </e.PreviewViewLeft>
            )
        })}

      <e.PreviewViewRight  data-aos-offset='-999' data-aos='zoom-in-left' data-aos-duration='600'>
            {projects.filter(p=>p.id === selectedId).map((p)=>{
                return(
                    <e.PreviewRightView>
        <e.ArrowView>
            <box-icon name='left-arrow-alt' onClick={()=>{
                if(selectedId >= 2){
            imgRef.current.style.filter="blur(20px)"
            imgRef.current.style.opacity="0"
                    setTimeout(()=>{
                    setSelectedId(id=>id-1)
                    },300)
                }
            }} color={p.colorscheme} style={e.ArrowRight}></box-icon>
            <box-icon name='left-arrow-alt' onClick={()=>{
                if(selectedId < 20){
            imgRef.current.style.filter="blur(20px)"
            imgRef.current.style.opacity="0"
                    setTimeout(()=>{
                    setSelectedId(id=>id+1)
                    },300)
                }
            }} color={p.colorscheme} style={e.ArrowLeft}></box-icon>
        </e.ArrowView>
                    <e.Point bg="#e14c44" mgleft="-4px"/>
                    <e.Point bg="#f5d827" mgleft="23px"/>
                    <e.Point bg="#58cb2e" mgleft="50px"/>
                    <e.PreviewRightTitleView>
                        <e.PreviewRightLine bg={p.colorscheme}/>
                        <e.PreviewRightTitle fg={p.colorscheme}>{p.title}</e.PreviewRightTitle>
                        <e.PreviewRightIc height={p.title==="Coming Soon" ? "60" : p.title==="Pizza Hut" ? "70" : p.title === "Vanderbilt" ? "34" : p.title==="Hacking Services" ? "30" : p.title==="Sharp Development" ? "33" : p.title==="LOC" ? "35" : null} transf={p.title === "Focus" ? "scale(.8)" : null} src={p.ic}/>
                </e.PreviewRightTitleView>
                        <e.PreviewRightDesc>{p.desc}</e.PreviewRightDesc>
                        <a href={p.url} target="_blank">
                        <e.ViewProjectButton bg={p.colorscheme}>{tr[0].text}</e.ViewProjectButton>
                        </a>
                            {technologies.filter((tec)=>tec.title === p.title).map((t)=>{
                                return(
                                <e.ProjectsView>
                                    {t.t1 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t1}</e.ProjectsBox>
                                    : null}
                                    {t.t2 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t2}</e.ProjectsBox>
                                    : null}
                                    {t.t3 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t3}</e.ProjectsBox>
                                    : null}
                                    {t.t4 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t4}</e.ProjectsBox>
                                    : null}
                                    {t.t5 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t5}</e.ProjectsBox>
                                    : null}
                                    {t.t6 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t6}</e.ProjectsBox>
                                    : null}
                                    {t.t7 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t7}</e.ProjectsBox>
                                    : null}
                                    {t.t8 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t8}</e.ProjectsBox>
                                    : null}
                                    {t.t9 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t9}</e.ProjectsBox>
                                    : null}
                                    {t.t10 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t10}</e.ProjectsBox>
                                    : null}
                                    {t.t11 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t11}</e.ProjectsBox>
                                    : null}
                                    {t.t12 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t12}</e.ProjectsBox>
                                    : null}
                                    {t.t13 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t13}</e.ProjectsBox>
                                    : null}
                                    {t.t14 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t14}</e.ProjectsBox>
                                    : null}
                                    {t.t15 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t15}</e.ProjectsBox>
                                    : null}
                                    {t.t16 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t16}</e.ProjectsBox>
                                    : null}
                                    {t.t17 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t17}</e.ProjectsBox>
                                    : null}
                                    {t.t18 ?
                                    <e.ProjectsBox fg={p.colorscheme}>{t.t18}</e.ProjectsBox>
                                    : null}
                                </e.ProjectsView>
                                )
                            })}          
                    </e.PreviewRightView>
                )
            })}
        </e.PreviewViewRight>
    </e.PreviewView>
    <e.PreviewProjectsView >
            {projects.map((p)=>{
                    let delayEffect;
                return(
                    <div data-aos='zoom-in-up' data-aos-delay={`${p.id}00`} data-aos-offset='-999' data-aos-once={true} data-aos-duration={600}>
                        <e.ProjectBox  bg={p.id === selectedId ? prop.theme === "light" ? "rgb(205,205,205)" : "rgb(112,112,112)" : null}  onClick={()=>handleUpdateId(p.id)}>
                            <e.ProjectId bg={p.colorscheme}>{p.id}</e.ProjectId>
                            <e.ProjectIc draggable={false} transf={p.title === "Focus" ? 'scale(.8)' : p.title==="Vanderbilt" ? "scale(.65)" : p.title==="EVERCODE" || p.title === "EVERCODE Services" ? "scale(.9)" : p.title==="Coming Soon" ? "scale(1.15)" : p.title==="Translators" ? "scale(.9)" : p.title === "Template" ? "scale(.9)" : p.title==="Sharp Development" ? "scale(.9)" : p.title === "Pizza Hut" ? "scale(1.5)" : p.title === "Hacking Services" ? "scale(.7)" : p.title === "FeCManager" ? "scale(.8)" : p.title === "Small Apps" ? "scale(.8)" : p.title === "LOC" ? "scale(.75)" : null} src={p.ic}/>
                            <e.ProjectTitle style={p.title === "Hacking Services" ? {marginLeft:'2px'} : null}>{p.title}</e.ProjectTitle>
                            <e.Etiqueta bg={p.colorscheme}/>
                        </e.ProjectBox>
                    </div>
                )
            })} 
    </e.PreviewProjectsView>
</View>
)
}
export default Projects;
