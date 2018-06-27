
import courseInfo from '../data/courseInfo'
import CourseCard from './CourseCard'

const CourseInfo = () =>
    <div>
        {courseInfo.map((acc, ind) => <CourseCard key={ind} courseName={courseInfo[ind].name} courseFaculty={courseInfo[ind].faculty}/>)}
    </div>



export default CourseInfo