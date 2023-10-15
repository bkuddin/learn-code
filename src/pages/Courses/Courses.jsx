
import { useLoaderData } from "react-router-dom";
import CoursesBanner from "../../components/Banners/CoursesBanner";
import Course from "./Course";


const Courses = () => {
    const courses = useLoaderData()
  
    return (
        <div >
            <CoursesBanner></CoursesBanner>
            <div className="px-20 mt-20">
               
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Courses;