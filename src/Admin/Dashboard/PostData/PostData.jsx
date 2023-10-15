import Swal from 'sweetalert2';
import PostDataBanner from "../../../components/Banners/PostDataBanner";

const PostData = () => {
  const handleAddData = (event) => {
    event.preventDefault();
    const form = event.target;
    const course_name = form.course_name.value;
    const image = form.image.value;
    const expert_name = form.expert_name.value;
    const card_bg_color = form.card_bg_color.value;

    const courses = { course_name, image, expert_name, card_bg_color };
    // const courses = { course, image, expert, color };
    console.log(courses);

    // Send data to server side
    fetch('http://localhost:5000/courses', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(courses)
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){       
        Swal.fire({
          title: 'Success!',
          text: 'Data added successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        form.reset()
      }
    })
  };
  return (
    <div>
      <PostDataBanner></PostDataBanner>

      <div className="max-w-[1200px] mx-auto my-20">
        <form onSubmit={handleAddData}>
          <div className="space-y-10">
          {/* First Row */}
            <div className="md:flex">
              <div className="form-control w-1/2 mr-4">
                <label className="label">
                  <span className="label-text text-gray-300">
                    Write Course Name Title
                  </span>
                </label>
                <label className="input-group">
                  <span className="w-1/3 bg-[#330066] text-white font-bold">
                    Course Name
                  </span>
                  <input
                    type="text"
                    name="course_name"
                    placeholder="Course Name"
                    className="input input-bordered w-full focus:outline-none focus:border-[#330066]"
                  />
                </label>
              </div>
              <div className="form-control w-1/2 mr-4">
                <label className="label">
                  <span className="label-text text-gray-300">
                    Add Course Cover Photo
                  </span>
                </label>
                <label className="input-group">
                  <span className="w-1/3 bg-[#330066] text-white font-bold">
                    Image URL
                  </span>
                  <input
                    type="text"
                    name="image"
                    placeholder="Course Name"
                    className="input input-bordered w-full focus:outline-none focus:border-[#330066]"
                  />
                </label>
              </div>
            </div>
            {/* Second Row */}
            <div className="md:flex">
              <div className="form-control w-1/2 mr-4">
                <label className="label">
                  <span className="label-text text-gray-300">
                    Write Course Instructor Name
                  </span>
                </label>
                <label className="input-group">
                  <span className="w-1/3 bg-[#330066] text-white font-bold">
                    Expert Name
                  </span>
                  <input
                    type="text"
                    name="expert_name"
                    placeholder="Course Name"
                    className="input input-bordered w-full focus:outline-none focus:border-[#330066]"
                  />
                </label>
              </div>
              <div className="form-control w-1/2 mr-4">
                <label className="label">
                  <span className="label-text text-gray-300">
                    Add Background Color in HashTag
                  </span>
                </label>
                <label className="input-group">
                  <span className="w-1/3 bg-[#330066] text-white font-bold">
                    BG Color Code
                  </span>
                  <input
                    type="text"
                    name="card_bg_color"
                    placeholder="Course Name"
                    className="input input-bordered w-full focus:outline-none focus:border-[#330066]"
                  />
                </label>
              </div>
            </div>
          </div>
          {/* Button */}
        
          <input type="submit" value="Add Data" className="btn btn-block bg-[#330066] text-white hover:text-[#330066] mt-20 font-bold" />
        </form>
      </div>
    </div>
  );
};

export default PostData;
