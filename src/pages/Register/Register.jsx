import { useState } from "react";

const Register = () => {
  const [courses, setCourses]= useState([])

    const handleRegister = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value; 
        const email = form.email.value;
        const password = form.password.value;
        const course = {name, email, password}

        fetch('http://localhost:5000/courses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(course)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const newCourse = [...courses, data ];
            setCourses(newCourse)
            form.reset()
        })

        

      
    }
  return (
    <div className="w-1/2 mx-auto mt-40">
      <form onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
