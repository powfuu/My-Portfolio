import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as e from './aboutmeComponents'
import { OrbitControls, Sky } from '@react-three/drei'
import { Important } from '../../defaultStyles'
import { aboutme as tr } from '../../translations'
const Lamp = React.lazy(()=>import('../../3d_modules/Lamp.js'))

const AboutMe = () =>{ 
return( 
    <e.AboutMeDiv>
        <e.AboutMeDivWindow data-aos='fade-up' data-aos-offset='-600' data-aos-duration='600'>
                    <e.Point bg="#e14c44" mgleft="23px"/>
                    <e.Point bg="#f5d827" mgleft="52px"/>
                    <e.Point bg="#58cb2e" mgleft="80px"/>
            <e.TitleView data-aos='zoom-in-right' data-aos-offset='-500' data-aos-duration='600'>
                <e.TitleViewLine/>
                <e.Title>{tr[0].aboutmetext}</e.Title>
            </e.TitleView>
            <e.FlexView>
                <e.Biography data-aos='zoom-in-up' data-aos-offset='-500' data-aos-duration='600' data-aos-delay='250'>
                  {tr[0].am1} <Important>{tr[0].am2}</Important> {tr[0].am3} <Important>{tr[0].am4}</Important><br/><br/>
                  {tr[0].am5} <Important>{tr[0].am6}</Important> {tr[0].am7} <Important>{tr[0].am8}</Important> {tr[0].am9}      
                    <br/>
                  {tr[0].am10} <Important>{tr[0].am11}</Important> {tr[0].am12} 
                    <br/>
                  {tr[0].am13} <Important>{tr[0].am14} </Important>{tr[0].am15} <br/>
                    <br/>
                  {tr[0].am16} <Important>{tr[0].am17}</Important> {tr[0].am18} <Important>{tr[0].am19}</Important> {tr[0].am20} {tr[0].am21}<br/>
                  {tr[0].am22} 
                    <br/><br/>
                  {tr[0].am23} <Important>{tr[0].am24}</Important> {tr[0].am25} <Important>{tr[0].am26}</Important>{tr[0].am27}<br/>
                    <br/>
                   {tr[0].am28}<Important> {tr[0].am29} </Important>{tr[0].am30}<Important> {tr[0].am31}</Important> {tr[0].am32} <br/>
                  {tr[0].am33} 

                </e.Biography>
                <e.D3View>
    <e.D3ModuleCanvas camera={{zoom:1, position:[75, 30, -55]}}>
        <ambientLight intensity={0.5}/>
        <pointLight position={[35,35,0]} intensity={0.4}/>
        <pointLight position={[-35,35,0]} intensity={0.4}/>
        <Lamp/>
        <OrbitControls enableZoom={false}/>
    </e.D3ModuleCanvas>
    <e.D3Text>{tr[0].d3movetext}</e.D3Text>
   </e.D3View>
        </e.FlexView>
        </e.AboutMeDivWindow>
    </e.AboutMeDiv>
)
}
export default AboutMe;
