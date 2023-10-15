

const Course = ({course}) => {
    const {course_name, image, expert_name, card_bg_color}= course;
    return (
        <div>

<div className="card card-compact h-96 bg-base-100 shadow-xl text-white">
  <figure><img src={image} alt="Shoes" /></figure>
  <div style={{backgroundColor: `${card_bg_color}`}} className="card-body">
    <h2 className="card-title">{course_name}</h2>
    <p>{expert_name}</p>
    <div className="card-actions justify-end">
      <button className="bg-[#330066] px-10 py-3 hover:rounded-lg">Buy Now</button>
    </div> 
  </div>
</div>


            
        </div>
    );
};

export default Course;