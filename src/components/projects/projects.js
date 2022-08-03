import { useState, useRef, lazy} from 'react'
import { Link } from 'react-router-dom'
import * as e from './projectsComponents'
import { View } from "../../defaultStyles"
import test2 from '../../resources/banner.png'
import inworkic from '../../resources/inworklogo.png'
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
import inworkbg from '../../resources/projectsbg/inwork.png'
import focusbg from '../../resources/projectsbg/focus.png'
import bashbg from '../../resources/projectsbg/bash.jpg'
import smallapps from '../../resources/projectsbg/smallapps.png'
import evercodebg from '../../resources/projectsbg/evercode.png'
import evercodeservicesbg from '../../resources/projectsbg/evercodeservicesbg.png'
import comingsoonbg from '../../resources/projectsbg/comingsoon.png'
import translatorsbg from '../../resources/projectsbg/translators.png'
import templatebg from '../../resources/projectsbg/template.png'
import vanderbiltbg from '../../resources/projectsbg/vanderbilt.png'
import sharpdevelopmentbg from '../../resources/projectsbg/sharpdevelopment.png'
import pizzahutbg from '../../resources/projectsbg/pizzahut.png'
import hackingservicesbg from '../../resources/projectsbg/hackingservices.png'
import fecmanagerbg from '../../resources/projectsbg/fecmanager.png'
import besigninvestbg from '../../resources/projectsbg/besigninvest.png'
import animatedportfoliobg from '../../resources/projectsbg/animatedportfolio.png'
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
    const [selectedId, setSelectedId]=useState(1)
    let technologies = [
        { title:"inWork", t1:'JavaScript', t2:'React', t3:'React Native', t4:'HTML',t5:'CSS',t6:'AOS',t7:'MySQL',t8:'Node.js',t10:'Express',t11:'JWT Auth',t12:'bcrypt',t13:'NodeMailer',t14:'MulterJs',t15:'Axios',t16:'HTTP Requests',t17:'jQuery',t18:'Responsive'},
        { title:"Small Apps", t1:'HTML', t2:'CSS', t3:'JavaScript', t4:'Bootstrap', t5:'AOS', t6:'Animate.css', t7:'Responsive'},
        { title:"Bash Site", t1:'Angular', t2:'TypeScript', t3:'HTML', t4:'CSS', t5:'Responsive'},
        { title:"Coming Soon", t1:'HTML', t2:'CSS', t3:'JavaScript', t4:'Responsive'},
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
        { title:"Animated Portfolio", t1:'JavaScript', t2:'React', t3:'Next.Js', t4:'HTML', t5:'CSS', t6:'Responsive', t7:'AOS'},
    ]
    let projects = [
        { id:1, title:'inWork', colorscheme:'#2DA6A8', ic: inworkic, bg: inworkbg, desc:desc1 }, 
        
        { id:2, colorscheme:'#4A5587', title:'Small Apps', ic:smallappslogo, bg: smallapps, desc:desc2 },
{ id:3, colorscheme:'#26273B', title:'Bash Site', ic:bash, bg:bashbg, desc:desc3 },
        { id:4, colorscheme:'#00CBA9', title:'Coming Soon', ic:comingsoon, bg: comingsoonbg, desc:desc4 },
        { id:5, colorscheme:'black', title:'EVERCODE', ic:evercode, bg:evercodebg, desc:desc5 },
        { id:6, colorscheme:'#FF008D', title:'Focus', ic:focusic, bg:focusbg, desc:desc6 },
        { id:7, colorscheme:'#5EABD5', title:'Translators', ic:translators, bg: translatorsbg, desc:desc7 },
        { id:8, colorscheme:'#EE3A43', title:'Pizza Hut', ic:pizzahut, bg: pizzahutbg, desc:desc8 },
        { id:9, colorscheme:'#F5C92C', title:'Template', ic:template1, bg: templatebg, desc:desc9 },
        { id:10, colorscheme:'#E30613', title:'Vanderbilt', ic:vanderbilt, bg: vanderbiltbg, desc:desc10 },
        { id:11, colorscheme:'#5658DD', title:'Sharp Development', ic:sharpdevelopment, bg: sharpdevelopmentbg, desc:desc11 },
        { id:12, colorscheme:'black', title:'EVERCODE Services', ic:evercode, bg: evercodeservicesbg, desc:desc12 },
        { id:13, colorscheme:'#5971F1', title:'Hacking Services', ic:hackingservice, bg: hackingservicesbg, desc:desc13 },
        { id:14, colorscheme:'#209CEE', title:'Template 2', ic:fecmanager, bg: fecmanagerbg, desc:desc14 },
        { id:15, colorscheme:'#00689F', title:'Besign Invest', ic:besigninvest, bg: besigninvestbg, desc:desc15 },
        { id:16, colorscheme:'#44A0FB', title:'Animated Portfolio', ic:animatedportfolio, bg: animatedportfoliobg, desc:desc16 },
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
                if(selectedId < 16){
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
                        <e.PreviewRightIc height={p.title==="Coming Soon" ? "60" : p.title==="Pizza Hut" ? "70" : p.title === "Vanderbilt" ? "34" : p.title==="Hacking Services" ? "30" : p.title==="Sharp Development" ? "33" : null} transf={p.title === "Focus" ? "scale(.8)" : null} src={p.ic}/>
                </e.PreviewRightTitleView>
                        <e.PreviewRightDesc>{p.desc}</e.PreviewRightDesc>
            <e.ViewProjectButton bg={p.colorscheme}>{tr[0].text}</e.ViewProjectButton>
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
                            <e.ProjectIc draggable={false} transf={p.title === "Focus" ? 'scale(.8)' : p.title==="Vanderbilt" ? "scale(.65)" : p.title==="EVERCODE" || p.title === "EVERCODE Services" ? "scale(.9)" : p.title==="Coming Soon" ? "scale(1.15)" : p.title==="Translators" ? "scale(.9)" : p.title === "Template" ? "scale(.9)" : p.title==="Sharp Development" ? "scale(.9)" : p.title === "Pizza Hut" ? "scale(1.5)" : p.title === "Hacking Services" ? "scale(.7)" : p.title === "FeCManager" ? "scale(.8)" : p.title === "Small Apps" ? "scale(.8)" : null} src={p.ic}/>
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
