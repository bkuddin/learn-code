import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DisplayFewCourse from "./DisplayFewCourse";


const FewCourse = () => {
    const [courses, setCourses] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/courses/')
        .then(res => res.json())
        .then(data=> setCourses(data)) 

    },[])
    return (
        <div className="px-20 my-10">

            <h2 className="text-center text-5xl font-semibold my-32">Areas Covered in This Journey</h2>


            <div  className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {
                    courses.slice(0,6).map(course => <DisplayFewCourse key={course._id} course={course}></DisplayFewCourse>)
                }
            </div>
            <Link className="flex justify-end" to="/courses"><button className="px-8 py-3 bg-[#330066] hover:rounded-lg text-white text-xl">See All Courses</button></Link>
            
        </div>
    );
};

export default FewCourse;