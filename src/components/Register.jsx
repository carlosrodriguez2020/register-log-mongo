import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <h2 className="text-center text-light ">Register</h2>
      <form
        className="p-2 container w-50 text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <label for="exampleInputName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="Name"
            {...register("first_name")}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputLastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="Name"
            {...register("last_name")}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputLastName"
            aria-describedby="LastName"
            {...register("email")}
          />
        </div>

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            {...register("password")}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default Register;
