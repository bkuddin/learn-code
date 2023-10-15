import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import AllDataDisplay from "./AllDataDisplay";

const AllData = () => {
  const loadedCourses = useLoaderData();

  const [courses, setCourses] = useState(loadedCourses); 

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/courses/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = courses.filter((course) => course._id !== _id);
              setCourses(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="px-20 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {courses.map((course) => (
            <AllDataDisplay
              key={course._id}
              course={course}
              handleDelete={handleDelete}
            ></AllDataDisplay>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllData;
