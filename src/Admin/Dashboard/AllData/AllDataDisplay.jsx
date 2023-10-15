import PropTypes from 'prop-types'; // ES6
import { Link } from "react-router-dom";

const AllDataDisplay = ({ course, handleDelete }) => {
  const { _id, course_name, image, expert_name, card_bg_color } = course;

  return (
    <div>
      <div className="card card-compact h-96 bg-base-100 shadow-xl text-white">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div
          style={{ backgroundColor: `${card_bg_color}` }}
          className="card-body"
        >
          <h2 className="card-title">{course_name}</h2>
          <p>{expert_name}</p>
          <div className="card-actions justify-end">
            {/* <button
              onClick={}
              className="bg-[#330066] px-10 py-3"
            >
              Delete Data
            </button> */}

            {/* Group Button */}

            <div className="btn-group btn-group-vertical space-y-2">
  <button onClick={() => handleDelete(_id)} className="btn bg-[#AD0000] text-white">Delete Data</button>
  <Link to={`/update-data/${_id}`}><button className="btn">Update Data</button></Link>
  <button className="btn">View Data</button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDataDisplay;
AllDataDisplay.propTypes ={

  course: PropTypes.object.isRequired, 
  handleDelete: PropTypes.func.isRequired,
   
}
