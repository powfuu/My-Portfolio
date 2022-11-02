import * as e from './coursesComponents'
import maintenance from '../../resources/maintenance.svg'
import { courses as tr } from '../../translations'

const Courses = () =>{ 
return( 
    <e.View style={{height:'calc(100vh - 298px)'}}>
        <e.Img src={maintenance} data-aos='zoom-in-up' data-aos-offset='-500'/>
        <e.Advice data-aos='zoom-in-up' data-aos-delay='200' data-aos-offset='-600'>{tr[0].stillWorking}</e.Advice>
    </e.View>
)
}
export default Courses;
