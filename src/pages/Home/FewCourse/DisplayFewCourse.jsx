import PropTypes from 'prop-types'; // ES6

const DisplayFewCourse = ({course}) => {
    const {course_name, image, expert_name, card_bg_color}= course;
    return (
        <div>
            <div className="card card-compact h-96 bg-base-100 shadow-xl text-white">
  <figure><img src={image} alt="Shoes" /></figure>
  <div style={{backgroundColor: `${card_bg_color}`}} className="card-body">
    <h2 className="card-title text-2xl">{course_name}</h2>
    <p>{expert_name}</p>
    
  </div>
</div>
        </div>
    );
};

export default DisplayFewCourse;

DisplayFewCourse.propTypes ={
  course: PropTypes.object.isRequired
}