import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateData = () => {
  const loadedCourses = useLoaderData()
  

  // Handle Update Data
  const handleUpdateData = (event) => {
    event.preventDefault();
    const form = event.target;
    const course_name = form.course_name.value;
    const image = form.image.value;
    const expert_name = form.expert_name.value;
    const card_bg_color = form.card_bg_color.value;
    const updateCourses = { course_name, image, expert_name, card_bg_color }; 
    console.log(updateCourses);  
   

    // Send data to server side
    fetch(`http://localhost:5000/courses/${loadedCourses._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateCourses)
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){       
        Swal.fire({
          title: 'Success!',
          text: 'Data updated successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        form.reset()
      }
    })
  };
    return (
        <div className="max-w-[1200px] mx-auto mt-40">

            <h2 className="text-5xl">Update Existing Data</h2>

        <form onSubmit={handleUpdateData}>
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
                   defaultValue={loadedCourses?.course_name}
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
                    defaultValue={loadedCourses?.image}
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
                    defaultValue={loadedCourses?.expert_name}
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
                    defaultValue={loadedCourses?.card_bg_color}
                    placeholder="Course Name"
                    className="input input-bordered w-full focus:outline-none focus:border-[#330066]"
                  />
                </label>
              </div>
            </div>
          </div>
  
          {/* Button */}
  
        
          <input type="submit" value="Update Data" className="btn btn-block bg-[#330066] text-white hover:text-[#330066] mt-20 font-bold" />
        </form>
      </div>
    );
};

export default UpdateData;