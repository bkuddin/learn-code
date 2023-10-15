import HomeBanner from "../../components/Banners/HomeBanner";
import Benefits from "./Benefits";
import CourseIncluded from "./CourseIncluded/CourseIncluded";
import FewCourse from "./FewCourse/FewCourse";



const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Benefits></Benefits>
            <FewCourse></FewCourse>
            <CourseIncluded></CourseIncluded>
           
            
            
        </div>
    );
};

export default Home;