
import courseInfo from '../data/courseInfo'
import CourseCard from './DoctorCard'

const DoctorsInfo = () =>
    <div>
        {courseInfo.map((item, ind) => <CourseCard key={ind} courseName={item.name} courseFaculty={item.faculty}/>)}
    </div>

export default DoctorsInfo