import DoctorCard from './DoctorCard'
import NewDoctorForm from './NewDoctorForm'

const DoctorsInfo = ({docList}) =>
    <div>
        {docList.map((item, ind) => <DoctorCard key={ind} {...item}/>)}
        <NewDoctorForm/>
    </div>

export default DoctorsInfo