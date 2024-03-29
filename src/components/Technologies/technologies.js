import { useEffect, useRef, lazy } from 'react'
import * as e from './technologiesComponents'
import { OrbitControls } from '@react-three/drei'
//logos
import javascriptsvg from '../../resources/tecsvg/javascript.svg'
import reactsvg from '../../resources/tecsvg/react.svg'
import nodejssvg from '../../resources/tecsvg/nodejs.svg'
import styledcomponentssvg from '../../resources/tecsvg/styled-components.svg'
import htmlsvg from '../../resources/tecsvg/html.svg'
import csssvg from '../../resources/tecsvg/css.svg'
import mysqlsvg from '../../resources/tecsvg/mysql.svg'
import awspng from '../../resources/tecsvg/aws.png'
import jquerysvg from '../../resources/tecsvg/jquery.svg'
import expressjssvg from '../../resources/tecsvg/expressjs.svg'
import backendsvg from '../../resources/tecsvg/backend.svg'
import npmsvg from '../../resources/tecsvg/npm.svg'
import multersvg from '../../resources/tecsvg/multer.svg'
import frontendsvg from '../../resources/tecsvg/frontend.svg'
import httprestsvg from '../../resources/tecsvg/httprest.svg'
import reactnativesvg from '../../resources/tecsvg/react-native.svg'
import gitsvg from '../../resources/tecsvg/git.svg'
import jwtsvg from '../../resources/tecsvg/jwt.svg'
import bcryptsvg from '../../resources/tecsvg/bcrypt.svg'
import typescriptsvg from '../../resources/tecsvg/typescript.svg'
import dockersvg from '../../resources/tecsvg/docker.svg'
import scsssvg from '../../resources/tecsvg/sass.svg'
import phpsvg from '../../resources/tecsvg/php.svg'
import threejssvg from '../../resources/tecsvg/threejs.svg'
import bootstrapsvg from '../../resources/tecsvg/bootstrap.svg'
import mongosvg from '../../resources/tecsvg/mongodb.svg'
import pythonsvg from '../../resources/tecsvg/python.svg'
import angularsvg from '../../resources/tecsvg/angular.svg'
import nextsvg from '../../resources/tecsvg/next.svg'
import tailwindsvg from '../../resources/tecsvg/tailwind.svg'
import vitesvg from '../../resources/tecsvg/vite.svg'
import { technologies as tr } from '../../translations'

const Laptop = lazy(()=>import('../../3d_modules/Laptop.js'))

const Technologies = () =>{ 
    let tecList = [
        {id: 0, title:'JavaScript', svg:javascriptsvg, lv: 2},
        {id: 15, title:'TypeScript', svg:typescriptsvg, lv: 2},
        {id: 1, title:'React', svg:reactsvg, lv: 2},
        {id: 26, title:'Angular', svg:angularsvg, lv: 2},
        {id: 3, title:'Node.Js', svg:nodejssvg, lv: 2},
        {id: 20, title:'Styled Components', svg:styledcomponentssvg, lv: 2},
        {id: 25, title:'npm libs', svg:npmsvg, lv: 2},
        {id: 4, title:'HTML', svg:htmlsvg, lv: 2},
        {id: 5, title:'CSS', svg:csssvg, lv: 2},
        {id: 8, title:'MySQL', svg:mysqlsvg, lv: 2},
        {id: 7, title:'jQuery', svg:jquerysvg, lv: 2},
        {id: 10, title:'Express.Js', svg:expressjssvg, lv: 2},
        {id: 19, title:'Backend Tools', svg:backendsvg, lv: 2},
        {id: 24, title:'Multer.Js', svg:multersvg, lv: 2},
        {id: 18, title:'Frontend Tools', svg:frontendsvg, lv: 2},
        {id: 16, title:'HTTP & REST', svg:httprestsvg, lv: 2},
        {id: 27, title:'AWS', svg:awspng, lv: 2},
        {id: 25, title:'Tailwind CSS', svg:tailwindsvg, lv: 1},
        {id: 26, title:'Vite', svg:vitesvg, lv: 1},
        {id: 2, title:'React Native', svg:reactnativesvg, lv: 1},
        {id: 12, title:'Git', svg:gitsvg, lv: 1},
        {id: 11, title:'JWT', svg:jwtsvg, lv: 1},
        {id: 17, title:'bcrypt.Js', svg:bcryptsvg, lv: 1},
        {id: 14, title:'Docker', svg:dockersvg, lv: 0},
        {id: 27, title:'MongoDB', svg:mongosvg, lv: 0},
        {id: 6, title:'SCSS', svg:scsssvg, lv: 0},
        {id: 9, title:'PHP', svg:phpsvg, lv: 0},
        {id: 13, title:'Three.Js', svg:threejssvg, lv: 0},
        {id: 22, title:'Bootstrap', svg:bootstrapsvg, lv: 0},
        {id: 23, title:'Python', svg:pythonsvg, lv: 0},
        {id: 24, title:'Next.Js', svg:nextsvg, lv: 0},
    ] 
    const d3ref = useRef(null)
    useEffect(()=>{
        d3ref.current.style.opacity="1"
    },[])
return( 
<e.TecView> 
        <e.TecBox>
            <e.TechnologiesView>
                <e.TecLevelView data-aos='zoom-in-up' data-aos-offset='-400' data-aos-duration='600'>
                    <e.TectLevelTitle>{tr[0].level}</e.TectLevelTitle>
                    <e.LevelsDiv>
                    <e.TecLevelDiv>
                        <e.TecLevelIndicator bg={'#F6AF04'} bgi={'linear-gradient(90deg, #EFEB77 0%, #DE791E 50%, #EFEB77 100%)'}/>
                        <e.TecLevelVal>{tr[0].basic}</e.TecLevelVal>
                    </e.TecLevelDiv>
                    <e.TecLevelDiv>
                        <e.TecLevelIndicator bg={'#41e975'} bgi={'linear-gradient(90deg, #4091B2 0%, #00cba9 50%, #41e975 100%)'}/>
                        <e.TecLevelVal>{tr[0].intermediate}</e.TecLevelVal>
                    </e.TecLevelDiv>
                    <e.TecLevelDiv>
                        <e.TecLevelIndicator bg={'rgb(56,123,255)'} bgi={'linear-gradient(90deg, rgb(162,68,255) 0%, rgb(52,182,255) 50%, rgb(162,68,255) 100%)'}/>
                        <e.TecLevelVal>{tr[0].advanced}</e.TecLevelVal>
                    </e.TecLevelDiv>
</e.LevelsDiv>
                </e.TecLevelView>
                <e.TechnologiesListView>
                    {tecList.map((tec, KEY)=>{
                        let bg,bgi;
                        if(tec.lv === 0){
                            bg="#F6AF04" 
                            bgi='linear-gradient(90deg, #EFEB77 0%, #DE791E 50%, #EFEB77 100%)'
                        }else if(tec.lv === 1){
                            bg="#41e975"
                            bgi='linear-gradient(90deg, #4091B2 0%, #00cba9 50%, #41e975 100%)'
                        }else if(tec.lv === 2){
                            bg="rgb(56,123,255)"
                            bgi="linear-gradient(90deg, rgb(162, 68, 255) 0%, rgb(52, 182, 255) 50%, rgb(162, 68, 255) 100%)"
                        }
                        return(
                            <e.TechBox data-aos-delay='300' key={KEY} data-aos-offset='-400' data-aos='zoom-in-left' data-aos-duration='600'>
                                <e.TechTitle fz={tec.title === "Styled Components" ? 12 : null} style={tec.title==="Styled Components" ? {marginTop:'17px'} : null}>{tec.title}</e.TechTitle>
                                <e.TechIS>
                                    <e.TechIndicator bg={bg} bgi={bgi}/>
                                    <e.TechSvg style={tec.svg === expressjssvg ? { height:'23px', width:'66px', marginLeft:'16px' } : tec.svg === npmsvg ? { marginTop:'22px' } : null} alt={tec.title} src={tec.svg}/>
                                </e.TechIS>
                            </e.TechBox>
                        )
                    })} 
                </e.TechnologiesListView>
            </e.TechnologiesView>
            <e.D3View ref={d3ref}>
    <e.D3ModuleCanvas camera={{zoom:2.4, position:[15, 7, -8]}}>
        <ambientLight intensity={0.5}/>
        <pointLight position={[35,35,0]} intensity={0.4}/>
        <pointLight position={[-35,35,0]} intensity={0.4}/>
        <Laptop />
        <OrbitControls enableZoom={false}/>
    </e.D3ModuleCanvas>
    <e.D3Text>{tr[0].d3movetext}</e.D3Text>
   </e.D3View>
</e.TecBox>
</e.TecView>
)
}
export default Technologies;
