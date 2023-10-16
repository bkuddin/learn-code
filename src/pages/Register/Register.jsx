import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import RegisterBanner from "../../components/Banners/RegisterBanner";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("")
  const [gender, setGender] = useState("");
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Selected gender:", gender);

    // Firebase Auth
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        //  Send user to Database
        const createAt = result.user?.metadata?.creationTime;
        const users = { name, email, password, createAt, gender };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(users),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "User added successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
              form.reset();
            }
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message)
      });
  };
  return (
    <div className="">
      <RegisterBanner></RegisterBanner>
      <div className="w-1/3 mx-auto my-20">
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
             
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
             
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
             
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Gender */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Gender</span>
            </label>
            <div className="flex space-x-4 ">
              <div className="text-[#330066] font-semibold">
                <input
                  className="mr-2"
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                />
                Male
              </div>
              <div className="text-[#330066] font-semibold">
                <input
                  className="mr-2"
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                />
                Female
              </div>
              <div className="text-[#330066] font-semibold">
                <input className="mr-2"
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === "other"}
                  onChange={handleGenderChange}
                />
                Other
              </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#330066] text-white hover:text-[#330066]">
              Register
            </button>
          </div>
        </form>
        
          <p className="text-[#D2042D] mt-2">{error}</p>
        
      </div>
    </div>
  );
};

export default Register;
