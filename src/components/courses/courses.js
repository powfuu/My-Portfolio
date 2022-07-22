import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as e from './coursesComponents'
import maintenance from '../../resources/maintenance.svg'

const Courses = () =>{ 
return( 
    <e.View style={{height:'calc(100vh - 298px)'}}>
        <e.Img src={maintenance} data-aos='zoom-in-up' data-aos-offset='-500'/>
        <e.Advice data-aos='zoom-in-up' data-aos-delay='200' data-aos-offset='-600'>Estoy trabajando en el desarrollo de mis cursos, date una vuelta por acá pronto!</e.Advice>
    </e.View>
)
}
export default Courses;
