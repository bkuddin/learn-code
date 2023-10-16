import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UsersBanner from "../Banners/UsersBanner";


const Users = () => {
  
  const loadUsers = useLoaderData();
  const [users, setUsers] = useState(loadUsers);

  const handleDeleteUser = (id) => {
    
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
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
        .then(res=> res.json())
        .then(data =>{
          console.log(data);
          if(data.deletedCount > 0){
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        })
      }
    });     
       
  };

  return (
    <div>
      <UsersBanner></UsersBanner>
      
      <div className="w-9/12 mx-auto my-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#330066] text-white">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Last Logged In</th>
                <th>Created At</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx+1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.lastLoggedAt}</td>
                  <td>{user.createAt}</td>
                  <td>
                    <Link to='/login'>
                      <button
                        className="btn border-[#330066] mr-4"
                      >
                        <FaPencilAlt className="text-sm text-[#330066]"/>
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="btn border-[#330066] text-[#330066]  "
                    >
                      <RxCross2/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
